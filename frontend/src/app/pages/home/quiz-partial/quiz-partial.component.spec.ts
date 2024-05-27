import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPartialComponent } from './quiz-partial.component';

describe('QuizPartialComponent', () => {
  let component: QuizPartialComponent;
  let fixture: ComponentFixture<QuizPartialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizPartialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
