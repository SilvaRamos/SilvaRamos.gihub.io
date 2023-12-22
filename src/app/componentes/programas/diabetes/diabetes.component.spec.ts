import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesComponent } from './diabetes.component';

describe('DiabetesComponent', () => {
  let component: DiabetesComponent;
  let fixture: ComponentFixture<DiabetesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiabetesComponent]
    });
    fixture = TestBed.createComponent(DiabetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
