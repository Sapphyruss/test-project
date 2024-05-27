import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSocialLinksComponent } from './c-social-links.component';

describe('CSocialLinksComponent', () => {
  let component: CSocialLinksComponent;
  let fixture: ComponentFixture<CSocialLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSocialLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CSocialLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
