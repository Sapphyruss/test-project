import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Custom imports
import { Lesson } from '../../../../core/models/index.models';

@Component({
  selector: 'app-lesson-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.scss'
})
export class LessonListComponent implements OnInit {
  lessons: Lesson[] = []

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentCourseLesson();
      
  }

  
  currentCourseLesson() {
    // this.activatedRoute.paramMap.subscribe((p: any) => {
    //   this.courseId = p.get('courseId');
    //   this.courseService.findById(this.courseId).subscribe(
    //     (res: any) => {
    //       this.lessons = res.lessons;
    //     }
    //   )
    // }
  //  )
   this.getAllLessonOfCourse((data: Lesson[]) => {
      this.lessons = data;
    })
  }

  // Fake lessons data
  getAllLessonOfCourse(cb: (i: Lesson[]) => void) {
    const req = new XMLHttpRequest();
    req.open('GET', '../../../../assets/data/fake-lesson.json');
    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data.data);
    };
    req.send();
  }
}
