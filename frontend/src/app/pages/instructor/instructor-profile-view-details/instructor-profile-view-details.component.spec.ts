import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorProfileViewDetailsComponent } from './instructor-profile-view-details.component';

describe('InstructorProfileViewDetailsComponent', () => {
  let component: InstructorProfileViewDetailsComponent;
  let fixture: ComponentFixture<InstructorProfileViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorProfileViewDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorProfileViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
