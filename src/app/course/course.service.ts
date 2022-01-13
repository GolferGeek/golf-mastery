import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  DocumentData,
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

  constructor(
    private readonly authService: AuthenticationService,
    private readonly firestore: Firestore
  ) {
    const coursesCollection = collection(this.firestore, `courses/`);
    this.courses$ = collectionData(coursesCollection, { idField: 'id' }) as Observable<Course[]>;
  }
  async createCourse(course: Partial<Course>) {
    const courseCollection = collection(this.firestore, `courses/`);
    await addDoc(courseCollection, course);
  }

}
