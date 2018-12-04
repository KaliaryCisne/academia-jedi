import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { EstudantesServiceService } from '../estudantes-service.service';

@Component({
  selector: 'app-estudantes',
  templateUrl: './estudantes.component.html',
  styleUrls: ['./estudantes.component.css']
})

export class EstudantesComponent implements OnInit {

  estudantes: Estudante[];

  // estudanteSelecionado: Estudante = {
  //   id: 1,
  //   nome: 'estudante1',
  //   isJedi: false,
  //   templo: null
  // }

  // onSelect(estudante: Estudante){
  //   this.estudanteSelecionado = estudante;
  // }

  
  constructor(private estudanteService: EstudantesServiceService) {}

  getEstudantes():void {
    this.estudanteService.getEstudantes()
      .subscribe(estudantes => this.estudantes = estudantes);
  }  

  ngOnInit() {
    this.getEstudantes();
  }

}
