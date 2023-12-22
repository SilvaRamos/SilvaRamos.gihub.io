import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoParaGestantesComponent } from './curso-para-gestantes.component';

describe('CursoParaGestantesComponent', () => {
  let component: CursoParaGestantesComponent;
  let fixture: ComponentFixture<CursoParaGestantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoParaGestantesComponent]
    });
    fixture = TestBed.createComponent(CursoParaGestantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
