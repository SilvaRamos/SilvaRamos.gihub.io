import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAtividadesComponent } from './home-atividades.component';

describe('HomeAtividadesComponent', () => {
  let component: HomeAtividadesComponent;
  let fixture: ComponentFixture<HomeAtividadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAtividadesComponent]
    });
    fixture = TestBed.createComponent(HomeAtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
