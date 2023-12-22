import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaReeducacaoAlimentarComponent } from './oficina-reeducacao-alimentar.component';

describe('OficinaReeducacaoAlimentarComponent', () => {
  let component: OficinaReeducacaoAlimentarComponent;
  let fixture: ComponentFixture<OficinaReeducacaoAlimentarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OficinaReeducacaoAlimentarComponent]
    });
    fixture = TestBed.createComponent(OficinaReeducacaoAlimentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
