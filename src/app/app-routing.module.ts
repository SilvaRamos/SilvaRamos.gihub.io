import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { DiabetesComponent } from './componentes/programas/diabetes/diabetes.component';
import { HomeComponent } from './componentes/home/home.component';
import { HomeAtividadesComponent } from './componentes/atividades/home-atividades/home-atividades.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [64, 64],
};

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path:'atividades', component: HomeAtividadesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
