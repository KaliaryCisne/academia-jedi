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
  
  constructor(private estudanteService: EstudantesServiceService) {}

  //Captura um recebe de estudantes
  getEstudantes():void {
    this.estudanteService.getEstudantes()
      .subscribe(estudantes => this.estudantes = estudantes);
  }
  
  //Adiciona um novo estudante
  adicionar(nome: String, isJedi: boolean, templo: String): void {
    nome = nome.trim();
    if (!nome) {
      this.mensagem('Nome é obrigatório');
      return;
    }
    if (!isJedi) {
      this.mensagem('Campo Jedi obrigatório');
      return;
    }
    this.estudanteService.adicionarEstudante({ nome, isJedi, templo } as Estudante)
      .subscribe(estudante => {
        this.estudantes.push(estudante);
      });
  }
  
  //Método notifica
  mensagem(mensagem: string): void {
    alert(mensagem);
  }

  ngOnInit() {
    this.getEstudantes();
  }

}
