import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CorpoComponent } from './componentes/corpo/corpo.component';
import { TopoComponent } from './componentes/topo/topo.component';
import { BotaoComponent } from './componentes/botao/botao.component';
import { GestantesComponent } from './componentes/programas/gestantes/gestantes.component';
import { DiabetesComponent } from './componentes/programas/diabetes/diabetes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './componentes/home/home.component';
import { CarrosselComponent } from './componentes/carrossel/carrossel.component';
import { HipertensaoComponent } from './componentes/programas/hipertensao/hipertensao.component';
import { IdosoComponent } from './componentes/programas/idoso/idoso.component';
import { OncologiaComponent } from './componentes/programas/oncologia/oncologia.component';
import { ObesidadeComponent } from './componentes/programas/obesidade/obesidade.component';
import { EmpresaComponent } from './componentes/programas/empresa/empresa.component';
import { AgitaUnimedComponent } from './componentes/atividades/agita-unimed/agita-unimed.component';
import { CursoParaGestantesComponent } from './componentes/atividades/curso-para-gestantes/curso-para-gestantes.component';
import { EncontrosSaudeMaisComponent } from './componentes/atividades/encontros-saude-mais/encontros-saude-mais.component';
import { EncontrosTravessiaComponent } from './componentes/atividades/encontros-travessia/encontros-travessia.component';
import { OficinaMovimentoFortalecimentoComponent } from './componentes/atividades/oficina-movimento-fortalecimento/oficina-movimento-fortalecimento.component';
import { OficinaPaiComponent } from './componentes/atividades/oficina-pai/oficina-pai.component';
import { OficinaReeducacaoAlimentarComponent } from './componentes/atividades/oficina-reeducacao-alimentar/oficina-reeducacao-alimentar.component';
import { OficinaTematicaGestantesComponent } from './componentes/atividades/oficina-tematica-gestantes/oficina-tematica-gestantes.component';
import { HomeAtividadesComponent } from './componentes/atividades/home-atividades/home-atividades.component';
import { LinkContatoComponent } from './componentes/link-contato/link-contato.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    CorpoComponent,
    TopoComponent,
    BotaoComponent,
    DiabetesComponent,
    GestantesComponent,
    HomeComponent,
    CarrosselComponent,
    HipertensaoComponent,
    IdosoComponent,
    OncologiaComponent,
    ObesidadeComponent,
    EmpresaComponent,
    AgitaUnimedComponent,
    CursoParaGestantesComponent,
    EncontrosSaudeMaisComponent,
    EncontrosTravessiaComponent,
    OficinaMovimentoFortalecimentoComponent,
    OficinaPaiComponent,
    OficinaReeducacaoAlimentarComponent,
    OficinaTematicaGestantesComponent,
    HomeAtividadesComponent,
    LinkContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
