import { Injectable } from '@angular/core';
import { Estudante } from './estudante';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const estudantes = [
      { id: 1, nome: 'Mr. Nice', isJedi: true, templo: 'Templo1' },
      { id: 2, nome: 'Narco' , isJedi: false, templo: 'Templo2'},
      { id: 3, nome: 'Bombasto' , isJedi: true, templo: 'Templo3'},
      { id: 4, nome: 'Celeritas' , isJedi: true, templo: 'Templo4'},
      { id: 5, nome: 'Magneta' , isJedi: true, templo: 'Templo5'},
      { id: 6, nome: 'RubberMan' , isJedi: true, templo: 'Templo1'},
      { id: 7, nome: 'Dynama' , isJedi: true, templo: 'Templo2'},
      { id: 8, nome: 'Dr IQ' , isJedi: true, templo: 'Templo3'},
      { id: 9, nome: 'Magma' , isJedi: true, templo: 'Templo4'},
      { id: 10, nome: 'Tornado' , isJedi: true, templo: 'Templo5'}
    ];
      return {estudantes};
  }
  genId(estudante: Estudante[]): number{
    return estudante.length > 0 ? Math.max(...estudante.map(estudante => estudante.id)) + 1 : 11;
  }
  constructor() { }
}
