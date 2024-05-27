import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashFeddbackComponent } from './dash-feddback.component';

describe('DashFeddbackComponent', () => {
  let component: DashFeddbackComponent;
  let fixture: ComponentFixture<DashFeddbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashFeddbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashFeddbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
