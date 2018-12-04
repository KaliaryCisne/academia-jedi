import { Component, OnInit } from '@angular/core';
import { Estudante } from '../estudante';
import { EstudantesServiceService } from '../estudantes-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estudante-detalhe',
  templateUrl: './estudante-detalhe.component.html',
  styleUrls: ['./estudante-detalhe.component.css']
})
export class EstudanteDetalheComponent implements OnInit {
  
 estudante: Estudante; 

  constructor(private route: ActivatedRoute,
              private estudanteService: EstudantesServiceService,
              private location: Location) {

   }

  ngOnInit() {
    this.getEstudante();
  }

  getEstudante(): void{
    const id = +this.route.snapshot.paramMap.get('id');
      this.estudanteService.getEstudante(id)
        .subscribe(estudante=> this.estudante= estudante);
  }

}
