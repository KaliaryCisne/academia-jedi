import { NgModule } from '@angular/core';
import { EstudantesComponent } from './estudantes/estudantes.component';

import { PainelComponent } from './painel/painel.component';
import { RouterModule, Routes} from '@angular/router';
import { EstudanteDetalheComponent } from './estudante-detalhe/estudante-detalhe.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


const routes: Routes = [
  {path:'', redirectTo:'/painel', pathMatch:'full'},
  {path:'painel', component: PainelComponent},
  {path:'estudantes', component: EstudantesComponent},
  {path:'detalhe/:id', component: EstudanteDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
