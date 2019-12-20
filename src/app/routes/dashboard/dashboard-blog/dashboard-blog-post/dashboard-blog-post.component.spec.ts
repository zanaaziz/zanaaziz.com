import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBlogPostComponent } from './dashboard-blog-post.component';

describe('DashboardBlogPostComponent', () => {
  let component: DashboardBlogPostComponent;
  let fixture: ComponentFixture<DashboardBlogPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBlogPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
