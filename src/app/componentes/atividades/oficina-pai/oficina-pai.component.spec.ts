import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaPaiComponent } from './oficina-pai.component';

describe('OficinaPaiComponent', () => {
  let component: OficinaPaiComponent;
  let fixture: ComponentFixture<OficinaPaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OficinaPaiComponent]
    });
    fixture = TestBed.createComponent(OficinaPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
