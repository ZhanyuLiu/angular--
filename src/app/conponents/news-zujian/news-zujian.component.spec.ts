import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsZujianComponent } from './news-zujian.component';

describe('NewsZujianComponent', () => {
  let component: NewsZujianComponent;
  let fixture: ComponentFixture<NewsZujianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsZujianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsZujianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
