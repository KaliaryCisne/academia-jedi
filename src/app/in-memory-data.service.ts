import { Injectable } from '@angular/core';
import { Estudante } from './estudante';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const estudantes = [
      { id: 11, nome: 'Mr. Nice', isJedi: true, templo: 'Templo1' },
      { id: 12, nome: 'Narco' , isJedi: false, templo: 'Templo2'},
      { id: 13, nome: 'Bombasto' , isJedi: true, templo: 'Templo3'},
      { id: 14, nome: 'Celeritas' , isJedi: true, templo: 'Templo4'},
      { id: 15, nome: 'Magneta' , isJedi: true, templo: 'Templo5'},
      { id: 16, nome: 'RubberMan' , isJedi: true, templo: 'Templo1'},
      { id: 17, nome: 'Dynama' , isJedi: true, templo: 'Templo2'},
      { id: 18, nome: 'Dr IQ' , isJedi: true, templo: 'Templo3'},
      { id: 19, nome: 'Magma' , isJedi: true, templo: 'Templo4'},
      { id: 20, nome: 'Tornado' , isJedi: true, templo: 'Templo5'}
    ];
      return {estudantes};
  }
  genId(estudante: Estudante[]): number{
    return estudante.length > 0 ? Math.max(...estudante.map(estudante => estudante.id)) + 1 : 11;
  }
  constructor() { }
}
