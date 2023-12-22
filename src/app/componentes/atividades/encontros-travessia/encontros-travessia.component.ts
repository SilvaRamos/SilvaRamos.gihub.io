import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-encontros-travessia',
  templateUrl: './encontros-travessia.component.html',
  styleUrls: ['./encontros-travessia.component.css']
})
export class EncontrosTravessiaComponent {

  constructor(private modalService: NgbModal)
  {}

  public fecharModal()
  {
    this.modalService.dismissAll();
  }

}
