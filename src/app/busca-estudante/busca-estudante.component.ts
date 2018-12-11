import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EstudantesServiceService } from '../estudantes-service.service';
import { Estudante } from '../estudante';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-busca-estudante',
  templateUrl: './busca-estudante.component.html',
  styleUrls: ['./busca-estudante.component.css']
})
export class BuscaEstudanteComponent implements OnInit {
  estudantes$: Observable<Estudante[]>;
  private termosBusca = new Subject<string>();
  constructor(private estudanteService: EstudantesServiceService) { }

  // Carrega um termo de busca no stream observable.
  buscar(termo: string): void {
  this.termosBusca.next(termo);
  }

  ngOnInit(): void{
    this.estudantes$ = this.termosBusca.pipe(
      // aguarda 300ms após cada pressão de tecla antes de utilizar o termo
      debounceTime(300),
      // ignora o novo termo se for o mesmo que o termo anterior
      distinctUntilChanged(),
      // muda para nova busca observable a cada vez que o termo muda
      switchMap((termo: string) => this.estudanteService.buscaEstudantes(termo)),
      );
  }

}
