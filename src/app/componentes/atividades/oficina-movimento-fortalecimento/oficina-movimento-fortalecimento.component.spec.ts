import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaMovimentoFortalecimentoComponent } from './oficina-movimento-fortalecimento.component';

describe('OficinaMovimentoFortalecimentoComponent', () => {
  let component: OficinaMovimentoFortalecimentoComponent;
  let fixture: ComponentFixture<OficinaMovimentoFortalecimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OficinaMovimentoFortalecimentoComponent]
    });
    fixture = TestBed.createComponent(OficinaMovimentoFortalecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
