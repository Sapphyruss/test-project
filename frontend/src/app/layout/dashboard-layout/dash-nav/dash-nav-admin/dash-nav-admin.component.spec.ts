import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashNavAdminComponent } from './dash-nav-admin.component';

describe('DashNavAdminComponent', () => {
  let component: DashNavAdminComponent;
  let fixture: ComponentFixture<DashNavAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashNavAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashNavAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
