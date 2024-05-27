import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CProfileViewDetailsComponent } from './c-profile-view-details.component';

describe('CProfileViewDetailsComponent', () => {
  let component: CProfileViewDetailsComponent;
  let fixture: ComponentFixture<CProfileViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CProfileViewDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CProfileViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
