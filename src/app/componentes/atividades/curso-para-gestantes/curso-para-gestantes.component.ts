import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-curso-para-gestantes',
  templateUrl: './curso-para-gestantes.component.html',
  styleUrls: ['./curso-para-gestantes.component.css']
})
export class CursoParaGestantesComponent {

  constructor(private modalService: NgbModal)
  {}

  public fecharModal()
  {
    this.modalService.dismissAll();
  }

}
