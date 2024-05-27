import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDeleteDialogComponent } from './c-delete-dialog.component';

describe('CDeleteDialogComponent', () => {
  let component: CDeleteDialogComponent;
  let fixture: ComponentFixture<CDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CDeleteDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
