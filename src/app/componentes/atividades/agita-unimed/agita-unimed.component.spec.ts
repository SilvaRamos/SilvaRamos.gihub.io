import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgitaUnimedComponent } from './agita-unimed.component';

describe('AgitaUnimedComponent', () => {
  let component: AgitaUnimedComponent;
  let fixture: ComponentFixture<AgitaUnimedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgitaUnimedComponent]
    });
    fixture = TestBed.createComponent(AgitaUnimedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
