import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

// Custom Routes
import { StaticRoutes } from '../../core/routes/static.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  staticRoutes: StaticRoutes = new StaticRoutes(); 
  @Input() isStudent: boolean = true;
  @Input() isInstructor: boolean = false;
  @Input() isAdmin: boolean = false;
  @Input() isLogged: boolean = true;

  access_learnxcel_level = sessionStorage.getItem('learnxcel_access_level');

  constructor() { 
    if (this.access_learnxcel_level == "student" || this.access_learnxcel_level == "STUDENT") {
      this.isStudent = true;
      this.isInstructor = false;
      this.isAdmin = false;
    } else if (this.access_learnxcel_level == "instructor" || this.access_learnxcel_level == "INSTRUCTOR") {
      this.isStudent = false;
      this.isInstructor = true;
      this.isAdmin = false;
    } else if (this.access_learnxcel_level == "admin" || this.access_learnxcel_level == "ADMIN") {
      this.isStudent = false;
      this.isInstructor = false;
      this.isAdmin = true;
    }
  }

  ngOnInit(): void {
      
  }
}
