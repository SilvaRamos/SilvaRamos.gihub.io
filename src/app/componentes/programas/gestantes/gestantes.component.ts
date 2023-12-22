import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gestantes',
  templateUrl: './gestantes.component.html',
  styleUrls: ['./gestantes.component.css']
})

export class GestantesComponent {

  constructor(public activeModal: NgbActiveModal){}

  fecharModal()
  {
    this.activeModal.dismiss();
  }

}
