import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CQuizAttemptsComponent } from './c-quiz-attempts.component';

describe('CQuizAttemptsComponent', () => {
  let component: CQuizAttemptsComponent;
  let fixture: ComponentFixture<CQuizAttemptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CQuizAttemptsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CQuizAttemptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
