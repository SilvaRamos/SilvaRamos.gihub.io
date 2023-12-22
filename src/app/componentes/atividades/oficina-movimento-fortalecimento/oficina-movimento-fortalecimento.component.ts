import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-oficina-movimento-fortalecimento',
  templateUrl: './oficina-movimento-fortalecimento.component.html',
  styleUrls: ['./oficina-movimento-fortalecimento.component.css']
})
export class OficinaMovimentoFortalecimentoComponent {
  constructor(private modalService: NgbModal)
  {}

  public fecharModal()
  {
    this.modalService.dismissAll();
  }

}
