import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorStatsComponent } from './instructor-stats.component';

describe('InstructorStatsComponent', () => {
  let component: InstructorStatsComponent;
  let fixture: ComponentFixture<InstructorStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
