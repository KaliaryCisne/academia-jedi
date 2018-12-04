import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { EstudantesServiceService } from '../estudantes-service.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  estudantes: Estudante[] = [];

  constructor(private estudanteService: EstudantesServiceService) { }

  ngOnInit() {
    this.getEstudantes();
  }

  getEstudantes():void {
    this.estudanteService.getEstudantes()
     .subscribe(estudantes => this.estudantes = estudantes.slice(0,5));
  }

}
