import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hipertensao',
  templateUrl: './hipertensao.component.html',
  styleUrls: ['./hipertensao.component.css']
})
export class HipertensaoComponent {
  constructor(public activeModal: NgbActiveModal){}

  fecharModal()
  {
    this.activeModal.dismiss();
  }

}
