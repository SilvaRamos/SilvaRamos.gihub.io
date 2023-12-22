import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaTematicaGestantesComponent } from './oficina-tematica-gestantes.component';

describe('OficinaTematicaGestantesComponent', () => {
  let component: OficinaTematicaGestantesComponent;
  let fixture: ComponentFixture<OficinaTematicaGestantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OficinaTematicaGestantesComponent]
    });
    fixture = TestBed.createComponent(OficinaTematicaGestantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
