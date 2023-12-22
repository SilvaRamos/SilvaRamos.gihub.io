import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkContatoComponent } from './link-contato.component';

describe('LinkContatoComponent', () => {
  let component: LinkContatoComponent;
  let fixture: ComponentFixture<LinkContatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkContatoComponent]
    });
    fixture = TestBed.createComponent(LinkContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
