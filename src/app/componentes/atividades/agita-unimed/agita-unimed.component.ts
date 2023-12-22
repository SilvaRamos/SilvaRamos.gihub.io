import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agita-unimed',
  templateUrl: './agita-unimed.component.html',
  styleUrls: ['./agita-unimed.component.css']
})
export class AgitaUnimedComponent {

  constructor(private modalService: NgbModal)
  {}

  public fecharModal()
  {
    this.modalService.dismissAll();
  }

}
