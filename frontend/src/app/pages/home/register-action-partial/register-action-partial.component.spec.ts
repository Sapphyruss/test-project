import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterActionPartialComponent } from './register-action-partial.component';

describe('RegisterActionPartialComponent', () => {
  let component: RegisterActionPartialComponent;
  let fixture: ComponentFixture<RegisterActionPartialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterActionPartialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterActionPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
