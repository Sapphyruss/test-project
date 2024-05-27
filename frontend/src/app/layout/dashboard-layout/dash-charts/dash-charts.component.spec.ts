import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashChartsComponent } from './dash-charts.component';

describe('DashChartsComponent', () => {
  let component: DashChartsComponent;
  let fixture: ComponentFixture<DashChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
