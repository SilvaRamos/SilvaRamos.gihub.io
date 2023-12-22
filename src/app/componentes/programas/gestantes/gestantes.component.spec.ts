import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestantesComponent } from './gestantes.component';

describe('GestantesComponent', () => {
  let component: GestantesComponent;
  let fixture: ComponentFixture<GestantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestantesComponent]
    });
    fixture = TestBed.createComponent(GestantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
