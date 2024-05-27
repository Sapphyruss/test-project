import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUpdateInfosComponent } from './c-update-infos.component';

describe('CUpdateInfosComponent', () => {
  let component: CUpdateInfosComponent;
  let fixture: ComponentFixture<CUpdateInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CUpdateInfosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CUpdateInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
