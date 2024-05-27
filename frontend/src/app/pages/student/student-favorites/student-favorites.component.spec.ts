import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFavoritesComponent } from './student-favorites.component';

describe('StudentFavoritesComponent', () => {
  let component: StudentFavoritesComponent;
  let fixture: ComponentFixture<StudentFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentFavoritesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
