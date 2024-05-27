import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPartialComponent } from './about-partial.component';

describe('AboutPartialComponent', () => {
  let component: AboutPartialComponent;
  let fixture: ComponentFixture<AboutPartialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPartialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
