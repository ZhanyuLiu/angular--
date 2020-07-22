import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderZujianComponent } from './header-zujian.component';

describe('HeaderZujianComponent', () => {
  let component: HeaderZujianComponent;
  let fixture: ComponentFixture<HeaderZujianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderZujianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderZujianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
