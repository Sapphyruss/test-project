import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCourseListComponent } from './c-course-list.component';

describe('CCourseListComponent', () => {
  let component: CCourseListComponent;
  let fixture: ComponentFixture<CCourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CCourseListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
