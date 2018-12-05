import { Injectable } from '@angular/core';
import { Estudante } from './estudante';
import { ESTUDANTES } from './mock-estudantes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudantesServiceService {

  getEstudantes(): Observable<Estudante[]>{
    return of(ESTUDANTES);
  }

  getEstudante(id: number): Observable<Estudante> {
    return of(ESTUDANTES.find(Estudante => Estudante.id === id));
  }

  constructor() { }
}
