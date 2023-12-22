import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CursoParaGestantesComponent } from '../curso-para-gestantes/curso-para-gestantes.component';
import { AgitaUnimedComponent } from '../agita-unimed/agita-unimed.component';
import { EncontrosSaudeMaisComponent } from '../encontros-saude-mais/encontros-saude-mais.component';
import { EncontrosTravessiaComponent } from '../encontros-travessia/encontros-travessia.component';
import { OficinaMovimentoFortalecimentoComponent } from '../oficina-movimento-fortalecimento/oficina-movimento-fortalecimento.component';
import { OficinaPaiComponent } from '../oficina-pai/oficina-pai.component';
import { OficinaReeducacaoAlimentarComponent } from '../oficina-reeducacao-alimentar/oficina-reeducacao-alimentar.component';
import { OficinaTematicaGestantesComponent } from '../oficina-tematica-gestantes/oficina-tematica-gestantes.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { fromEvent, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home-atividades',
  templateUrl: './home-atividades.component.html',
  styleUrls: ['./home-atividades.component.css']
})
export class HomeAtividadesComponent implements OnInit {

  title="AngularRouting";

  @ViewChild('atividades') atividades: ElementRef<HTMLInputElement> = {} as ElementRef;

  // constructor(private modalService: NgbModal, private router: Router)
  // {}

  constructor(private modalService: NgbModal, private activatedRoute: ActivatedRoute){}
  
 ngOnInit() {
  this.activatedRoute.fragment.subscribe((value) => {
      console.log(value);
      this.rolaPaginaPara(value);
    });
  }

  rolaPaginaPara(section:any){
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'});
  }


  //   console.log(123);
  //   //this.router.navigate(["/"]);
  //   //this.router.navigate([], { fragment: "atividades" });
  //   //  this.router.navigate([], { fragment: "alvo" });
  // }

  // ngAfterViewChecked() {
  //   this.router.navigate([], { fragment: "alvo" });
//  }

  // ngAfterViewInit(): void {
  //   //this.router.navigate([], { fragment: "alvo" });

  //   fromEvent(window, 'scroll')
  //           .subscribe((e:any) => 
  //       {
  //         console.log(e);
  //         if(e.srcElement!.URL =='http://localhost:4200/#alvo')
  //         {
  //           this.router.navigate([''],{fragment:'alvo'});
  //           //this.timeline.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  //           //this.routeFragment = 'timeline';
  //         }
  //       });
  // }
  // destroy$(destroy$: any): import("rxjs").OperatorFunction<Event, Event> {
  //   throw new Error('Method not implemented.');
  // }

  private opcoesModal: NgbModalOptions = {
    backdrop: 'static', centered: true,
    backdropClass: 'backdrop-modal',
    windowClass: 'modal-grande',
    size: 'lg'
    //change:this.changeStatus.bind(this)
  };
  
    //abre uma modal com a descrição do programa
    public exibeAtividade(codigo:number)
    {
        switch(codigo)
        {
          case 1:
          this.modalService.open(AgitaUnimedComponent, this.opcoesModal);
          break;
          case 2:
          this.modalService.open(CursoParaGestantesComponent, this.opcoesModal);   
          break;
          case 3:
          this.modalService.open(EncontrosSaudeMaisComponent, this.opcoesModal);   
          break;
          case 4:
          this.modalService.open(EncontrosTravessiaComponent, this.opcoesModal);   
          break;
          case 5:
          this.modalService.open(OficinaMovimentoFortalecimentoComponent, this.opcoesModal);     
          break;
          case 6:
          this.modalService.open(OficinaPaiComponent, this.opcoesModal);   
          break;
          case 7:
          this.modalService.open(OficinaReeducacaoAlimentarComponent, this.opcoesModal);   
          break;
          case 8:
          this.modalService.open(OficinaTematicaGestantesComponent, this.opcoesModal);   
          break;
        }
    }

    scroll(el: HTMLElement) {
      el.scrollIntoView();
    }
}
