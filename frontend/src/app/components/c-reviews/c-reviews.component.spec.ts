import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CReviewsComponent } from './c-reviews.component';

describe('CReviewsComponent', () => {
  let component: CReviewsComponent;
  let fixture: ComponentFixture<CReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
