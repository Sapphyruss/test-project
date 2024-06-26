import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStatsComponent } from './student-stats.component';

describe('StudentStatsComponent', () => {
  let component: StudentStatsComponent;
  let fixture: ComponentFixture<StudentStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
