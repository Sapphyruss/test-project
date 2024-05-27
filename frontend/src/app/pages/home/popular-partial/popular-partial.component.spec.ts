import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPartialComponent } from './popular-partial.component';

describe('PopularPartialComponent', () => {
  let component: PopularPartialComponent;
  let fixture: ComponentFixture<PopularPartialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularPartialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
