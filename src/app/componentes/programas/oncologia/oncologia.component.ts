import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-oncologia',
  templateUrl: './oncologia.component.html',
  styleUrls: ['./oncologia.component.css']
})
export class OncologiaComponent {
  constructor(public activeModal: NgbActiveModal){}

  fecharModal()
  {
    this.activeModal.dismiss();
  }

}
