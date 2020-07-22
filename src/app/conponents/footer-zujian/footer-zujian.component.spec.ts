import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterZujianComponent } from './footer-zujian.component';

describe('FooterZujianComponent', () => {
  let component: FooterZujianComponent;
  let fixture: ComponentFixture<FooterZujianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterZujianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterZujianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
