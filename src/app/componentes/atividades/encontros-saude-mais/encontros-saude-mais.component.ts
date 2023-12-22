import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-encontros-saude-mais',
  templateUrl: './encontros-saude-mais.component.html',
  styleUrls: ['./encontros-saude-mais.component.css']
})
export class EncontrosSaudeMaisComponent {

  constructor(private modalService: NgbModal)
  {}

  public fecharModal()
  {
    this.modalService.dismissAll();
  }

}
