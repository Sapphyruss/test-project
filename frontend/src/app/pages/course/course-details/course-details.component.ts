import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

// Custom elements imports
import { StaticRoutes } from '../../../core/routes/static.routes';
import { Title } from '@angular/platform-browser';
import { Course, Lesson } from '../../../core/models/index.models';
import { CourseService } from '../../../core/services/index.services';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss',
})
export class CourseDetailsComponent implements OnInit {
  staticRoutes: StaticRoutes = new StaticRoutes();

  courseTitle?: string;
  lessons: Lesson[] = [];
  course?: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const courseId = params['courseId'];
      this.updateTitle(courseId);
      this.findCourseByCourseId(courseId);
    });
  }

  currentCourse() {
    this.activatedRoute.paramMap.subscribe((p: any) => {
      const courseId = p.get('courseId');
      this.courseService.getCourseById(courseId).subscribe((res: any) => {
        this.course = res.data;
        console.log(this.course);
      });
    });
    this.getAllLessonOfCourse((data: Course) => {
      this.course = data;
    });
  }

  // Fake lessons data
  getAllLessonOfCourse(cb: (i: Course) => void) {
    const req = new XMLHttpRequest();
    req.open('GET', '../../../../assets/data/fake-course.json');
    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data.data);
    };
    req.send();
  }

  /**
   * Updates the title of the page
   * @param {string} courseId : Id of course
   * @returns {void}
   */
  updateTitle(courseId: number): void {
    const newTitle = `LearnXcel | ${courseId} Course Details`;
    this.titleService.setTitle(newTitle);
  }

  /**
   * Retrieves a course by its ID and updates the component's course property.
   *
   * @param {number} courseId - The ID of the course to retrieve.
   * @return {void} anything.
   */
  findCourseByCourseId(courseId: number) {
    this.courseService.getCourseById(courseId).subscribe((res: any) => {
      this.course = res.data;
      console.log(this.course);
    });
  }
}
