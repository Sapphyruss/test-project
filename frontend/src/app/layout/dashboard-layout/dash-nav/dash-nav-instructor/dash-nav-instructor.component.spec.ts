import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashNavInstructorComponent } from './dash-nav-instructor.component';

describe('DashNavInstructorComponent', () => {
  let component: DashNavInstructorComponent;
  let fixture: ComponentFixture<DashNavInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashNavInstructorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashNavInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
