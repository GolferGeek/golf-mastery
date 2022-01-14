import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
} from '@angular/fire/firestore';
import { AuthenticationService } from '../authentication/authentication.service';
import { Course } from './course.model';
import { BehaviorSubject, from, map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courses$: Observable<Course[]>;
  currentCourse: Course;

  constructor(
    private readonly authService: AuthenticationService,
    private readonly firestore: Firestore
  ) {
    const coursesCollection = collection(this.firestore, `courses/`);
    this.courses$ = collectionData(coursesCollection, {
      idField: 'id',
    }) as Observable<Course[]>;
  }
  async createCourse(course: Partial<Course>) {
    const courseCollection = collection(this.firestore, `courses/`);
    await addDoc(courseCollection, course);
  }

  getCourseDetail(courseId: string): Observable<Course> {
    const courseRef = doc(this.firestore, `courses/${courseId}`);
    return docData(courseRef, {
      idField: 'id',
    }) as unknown as Observable<Course>;
  }

  async deleteCourse(courseId: string) {
    const documentReference = doc(
      this.firestore,
      `courses/${courseId}`
    );
    await deleteDoc(documentReference);
  }
}
