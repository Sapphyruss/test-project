import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CChangePasswordComponent } from './c-change-password.component';

describe('CChangePasswordComponent', () => {
  let component: CChangePasswordComponent;
  let fixture: ComponentFixture<CChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CChangePasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
