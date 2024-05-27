import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashRecentCourseComponent } from './dash-recent-course.component';

describe('DashRecentCourseComponent', () => {
  let component: DashRecentCourseComponent;
  let fixture: ComponentFixture<DashRecentCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashRecentCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashRecentCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
