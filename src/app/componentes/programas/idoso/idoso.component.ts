import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-idoso',
  templateUrl: './idoso.component.html',
  styleUrls: ['./idoso.component.css']
})
export class IdosoComponent {
  constructor(public activeModal: NgbActiveModal){}

  fecharModal()
  {
    this.activeModal.dismiss();
  }

}
