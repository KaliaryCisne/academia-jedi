import { Injectable } from '@angular/core';
import { Estudante } from './estudante';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { InMemoryDataService } from './in-memory-data.service';

@Injectable({
  providedIn: 'root'
})
export class EstudantesServiceService {
  private estudantesUrl = 'api/estudantes';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  estudantes: Estudante[];
  //metodo log
  private log(mensagem: string) {
    console.log(`EstudanteService: ${mensagem}`);
  }

  //Retorna um array de estudantes
  getEstudantes(): Observable<Estudante[]> {
    return this.http.get<Estudante[]>(this.estudantesUrl)
      .pipe(
        tap(_ => this.log('estudantes obtidos')),
        catchError(this.trataErro('getEstudantes', []))
      )
  }

  //Retorna um estudante
  getEstudante(id: number): Observable<Estudante> {
    const url = `${this.estudantesUrl}/${id}`;
    return this.http.get<Estudante>(url).pipe(
      tap(_ => this.log(`obtido o estudante id=${id}`)),
      catchError(this.trataErro<Estudante>(`getEstudante id=${id}`))
    );
  }
  //Trata erros
  private trataErro<T>(operacao = 'operação', resultado?: T) {
    return (erro: any): Observable<T> => {
      console.error(erro);
      this.log(`${operacao} falhou: ${erro.message}`);
      return of(resultado as T);
    };
  }
  
  //Put: atualiza o estudante no Servidor
  atualizarEstudante(estudante: Estudante): Observable<any> {
    return this.http.put(this.estudantesUrl, estudante, this.httpOptions).pipe(
      tap(_ => this.log(`Atualizado o ID do estudante=${estudante.id}`)),
      catchError(this.trataErro<any>('atualizarEstudante'))
    );
  }

  // POST: adiciona um novo estudante no servidor 
  adicionarEstudante(estudante: Estudante): Observable<Estudante> {
    this.getEstudantes().subscribe(estudantes => this.estudantes = estudantes);
    return this.http.post<Estudante>(this.estudantesUrl, estudante, this.httpOptions).pipe(
      tap((estudante: Estudante) => this.log(`Adicionado estudante com ID=${estudante.id}`)),
      catchError(this.trataErro<Estudante>('adicionarEstudante'))
    );
  }

  //DELETE: Remove um estudante do servidor
  removerEstudante(estudante: Estudante | number ): Observable<Estudante>{
    const id = typeof estudante === 'number' ? estudante: estudante.id;
    const url = `${this.estudantesUrl}/${id}`;

    return this.http.delete<Estudante>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Removido o estudante com ID=${id}`)),
      catchError(this.trataErro<Estudante>('removeEstudante'))
    );
  }
  // GET estudantes cujo nome contém o termo de pesquisa
  buscaEstudantes(termo: string): Observable<Estudante[]> {
    if (!termo.trim()) {
      // se nenhum termo de pesquisa, retorna array de heróis vazio.
      return of([]);
    }
    return this.http.get<Estudante[]>(`${this.estudantesUrl}/?nome=${termo}`).pipe(
      tap(_ => this.log(`encontrados estudantes compatíveis com "${termo}"`)),
      catchError(this.trataErro<Estudante[]>('buscaEstudantes', []))
    );
  }

  constructor(private http: HttpClient,
    private inMemoryService: InMemoryDataService) { }
}