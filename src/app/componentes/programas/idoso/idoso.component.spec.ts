import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdosoComponent } from './idoso.component';

describe('IdosoComponent', () => {
  let component: IdosoComponent;
  let fixture: ComponentFixture<IdosoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdosoComponent]
    });
    fixture = TestBed.createComponent(IdosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
