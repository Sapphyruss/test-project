import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CProfileComponent } from './c-profile.component';

describe('CProfileComponent', () => {
  let component: CProfileComponent;
  let fixture: ComponentFixture<CProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
