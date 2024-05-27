import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAssignmentsComponent } from './c-assignments.component';

describe('CAssignmentsComponent', () => {
  let component: CAssignmentsComponent;
  let fixture: ComponentFixture<CAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CAssignmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
