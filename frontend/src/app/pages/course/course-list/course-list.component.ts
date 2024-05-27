import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Cutsom elements imports
import { StaticRoutes } from '../../../core/routes/static.routes';
import { CourseService } from '../../../core/services/index.services';
import { Course } from '../../../core/models/index.models';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss',
})
export class CourseListComponent implements OnInit {
  staticRoutes: StaticRoutes = new StaticRoutes();
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getAllCourses((data: Course[]) => {
      this.courses = data;
    });
  }


  // Retrive all courses (fake)
  getAllCourses(cb: (i: Course[]) => void) {
    const req = new XMLHttpRequest();
    req.open('GET', '../../../../assets/data/fake-course.json');
    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data.data);
    };
    req.send();
  }
}
