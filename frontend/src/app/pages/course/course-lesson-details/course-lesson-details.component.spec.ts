import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLessonDetailsComponent } from './course-lesson-details.component';

describe('CourseLessonDetailsComponent', () => {
  let component: CourseLessonDetailsComponent;
  let fixture: ComponentFixture<CourseLessonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseLessonDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseLessonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
