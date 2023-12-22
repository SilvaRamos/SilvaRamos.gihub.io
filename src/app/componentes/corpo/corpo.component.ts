import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { GestantesComponent } from '../programas/gestantes/gestantes.component';
import { DiabetesComponent } from '../programas/diabetes/diabetes.component';
import { HipertensaoComponent } from '../programas/hipertensao/hipertensao.component';
import { IdosoComponent } from '../programas/idoso/idoso.component';
import { ObesidadeComponent } from '../programas/obesidade/obesidade.component';
import { OncologiaComponent } from '../programas/oncologia/oncologia.component';
import { EmpresaComponent } from '../programas/empresa/empresa.component';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent {

  constructor(private modalService: NgbModal)
  {}

  private opcoesModal: NgbModalOptions = {
    backdrop: 'static', centered: true,
    backdropClass: 'backdrop-modal',
    windowClass: 'modal-grande',
    size: 'lg'
    //change:this.changeStatus.bind(this)
  };
  private programa:string="";

  //abre uma modal com a descrição do programa
  public exibePrograma(nome:string)
  {
      switch(nome)
      {
        case 'gestantes':
          this.modalService.open(GestantesComponent, this.opcoesModal);
        break;
        case 'diabetes':
          this.modalService.open(DiabetesComponent, this.opcoesModal);     
        break;
        case 'hipertensao':
          this.modalService.open(HipertensaoComponent, this.opcoesModal);
        break;
        case 'idoso':
          this.modalService.open(IdosoComponent, this.opcoesModal);     
        break;
        case 'obesidade':
          this.modalService.open(ObesidadeComponent, this.opcoesModal);     
        break;
        case 'oncologico':
          this.modalService.open(OncologiaComponent, this.opcoesModal);     
        break;
        case 'empresas':
          this.modalService.open(EmpresaComponent, this.opcoesModal);     
        break;
      }
  }

  public fechaPrograma()
  {
    this.modalService.dismissAll();
  }
}
