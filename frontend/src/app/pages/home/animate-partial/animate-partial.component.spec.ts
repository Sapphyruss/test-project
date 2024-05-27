import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatePartialComponent } from './animate-partial.component';

describe('AnimatePartialComponent', () => {
  let component: AnimatePartialComponent;
  let fixture: ComponentFixture<AnimatePartialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatePartialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimatePartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
