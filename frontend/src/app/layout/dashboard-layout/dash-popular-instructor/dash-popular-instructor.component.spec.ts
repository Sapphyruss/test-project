import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPopularInstructorComponent } from './dash-popular-instructor.component';

describe('DashPopularInstructorComponent', () => {
  let component: DashPopularInstructorComponent;
  let fixture: ComponentFixture<DashPopularInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashPopularInstructorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashPopularInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
