import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObesidadeComponent } from './obesidade.component';

describe('ObesidadeComponent', () => {
  let component: ObesidadeComponent;
  let fixture: ComponentFixture<ObesidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObesidadeComponent]
    });
    fixture = TestBed.createComponent(ObesidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
