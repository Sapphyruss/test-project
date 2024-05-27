import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashNavStudentComponent } from './dash-nav-student.component';

describe('DashNavStudentComponent', () => {
  let component: DashNavStudentComponent;
  let fixture: ComponentFixture<DashNavStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashNavStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashNavStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
