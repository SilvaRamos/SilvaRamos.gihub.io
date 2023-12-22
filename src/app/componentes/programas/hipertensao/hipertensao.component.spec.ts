import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipertensaoComponent } from './hipertensao.component';

describe('HipertensaoComponent', () => {
  let component: HipertensaoComponent;
  let fixture: ComponentFixture<HipertensaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HipertensaoComponent]
    });
    fixture = TestBed.createComponent(HipertensaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
