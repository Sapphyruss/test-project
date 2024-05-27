import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileViewDetailsComponent } from './student-profile-view-details.component';

describe('StudentProfileViewDetailsComponent', () => {
  let component: StudentProfileViewDetailsComponent;
  let fixture: ComponentFixture<StudentProfileViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentProfileViewDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentProfileViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
