import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncontrosTravessiaComponent } from './encontros-travessia.component';

describe('EncontrosTravessiaComponent', () => {
  let component: EncontrosTravessiaComponent;
  let fixture: ComponentFixture<EncontrosTravessiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncontrosTravessiaComponent]
    });
    fixture = TestBed.createComponent(EncontrosTravessiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
