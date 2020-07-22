import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeZujianComponent } from './home-zujian.component';

describe('HomeZujianComponent', () => {
  let component: HomeZujianComponent;
  let fixture: ComponentFixture<HomeZujianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeZujianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeZujianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
