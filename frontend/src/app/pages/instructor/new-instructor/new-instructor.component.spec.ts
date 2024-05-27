import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInstructorComponent } from './new-instructor.component';

describe('NewInstructorComponent', () => {
  let component: NewInstructorComponent;
  let fixture: ComponentFixture<NewInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewInstructorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
