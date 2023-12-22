import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-oficina-reeducacao-alimentar',
  templateUrl: './oficina-reeducacao-alimentar.component.html',
  styleUrls: ['./oficina-reeducacao-alimentar.component.css']
})
export class OficinaReeducacaoAlimentarComponent {
  constructor(private modalService: NgbModal)
  {}

  public fecharModal()
  {
    this.modalService.dismissAll();
  }

}
