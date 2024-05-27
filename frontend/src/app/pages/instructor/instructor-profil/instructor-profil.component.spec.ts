import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorProfilComponent } from './instructor-profil.component';

describe('InstructorProfilComponent', () => {
  let component: InstructorProfilComponent;
  let fixture: ComponentFixture<InstructorProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorProfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
