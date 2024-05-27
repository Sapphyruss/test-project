import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPartialComponent } from './banner-partial.component';

describe('BannerPartialComponent', () => {
  let component: BannerPartialComponent;
  let fixture: ComponentFixture<BannerPartialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPartialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
