import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncontrosSaudeMaisComponent } from './encontros-saude-mais.component';

describe('EncontrosSaudeMaisComponent', () => {
  let component: EncontrosSaudeMaisComponent;
  let fixture: ComponentFixture<EncontrosSaudeMaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncontrosSaudeMaisComponent]
    });
    fixture = TestBed.createComponent(EncontrosSaudeMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
