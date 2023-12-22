import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-oficina-tematica-gestantes',
  templateUrl: './oficina-tematica-gestantes.component.html',
  styleUrls: ['./oficina-tematica-gestantes.component.css']
})
export class OficinaTematicaGestantesComponent {
  constructor(private modalService: NgbModal)
  {}

  public fecharModal()
  {
    this.modalService.dismissAll();
  }

}
