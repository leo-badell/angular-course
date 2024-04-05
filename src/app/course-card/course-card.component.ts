import { EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { Course } from '../model/course';






@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input()
  course: Course;

  @Input({required: true})
  index: number;

  @Output('courseSelected')

  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {

    console.log("card component - button clicked ...")

    this.courseSelected.emit(this.course)

  }
  
  constructor() {

  }
  ng0Init() {

  }


}


