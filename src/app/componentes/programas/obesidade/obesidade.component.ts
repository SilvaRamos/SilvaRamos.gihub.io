import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-obesidade',
  templateUrl: './obesidade.component.html',
  styleUrls: ['./obesidade.component.css']
})
export class ObesidadeComponent {
  constructor(public activeModal: NgbActiveModal){}

  fecharModal()
  {
    this.activeModal.dismiss();
  }
}
