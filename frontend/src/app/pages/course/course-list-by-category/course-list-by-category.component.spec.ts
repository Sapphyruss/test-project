import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListByCategoryComponent } from './course-list-by-category.component';

describe('CourseListByCategoryComponent', () => {
  let component: CourseListByCategoryComponent;
  let fixture: ComponentFixture<CourseListByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListByCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseListByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
