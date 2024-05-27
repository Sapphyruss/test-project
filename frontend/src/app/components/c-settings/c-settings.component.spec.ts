import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSettingsComponent } from './c-settings.component';

describe('CSettingsComponent', () => {
  let component: CSettingsComponent;
  let fixture: ComponentFixture<CSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
