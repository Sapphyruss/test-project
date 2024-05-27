import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Custom components imports
import { VideoContentComponent } from './video-content/video-content.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';

@Component({
  selector: 'app-course-lesson-details',
  standalone: true,
  imports: [CommonModule, VideoContentComponent, LessonListComponent],
  templateUrl: './course-lesson-details.component.html',
  styleUrl: './course-lesson-details.component.scss'
})
export class CourseLessonDetailsComponent {
  // Fakes data
  
}
