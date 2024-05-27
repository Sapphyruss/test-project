import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFavoritesComponent } from './c-favorites.component';

describe('CFavoritesComponent', () => {
  let component: CFavoritesComponent;
  let fixture: ComponentFixture<CFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CFavoritesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
