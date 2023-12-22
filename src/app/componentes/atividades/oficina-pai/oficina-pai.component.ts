import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-oficina-pai',
  templateUrl: './oficina-pai.component.html',
  styleUrls: ['./oficina-pai.component.css']
})
export class OficinaPaiComponent {
  constructor(private modalService: NgbModal)
  {}

  public fecharModal()
  {
    this.modalService.dismissAll();
  }

}
