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
import { Course } from './models/course.model';
import { BehaviorSubject, from, map, Observable, switchMap } from 'rxjs';
import { updateDoc } from 'firebase/firestore';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Tees } from './models/scoreCard.model';

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

  getCourse(courseId: string) {
    const courseRef = doc(this.firestore, `courses/${courseId}`);
    docData(courseRef, {
      idField: 'id',
    }).subscribe(course => this.currentCourse = course as Course);
  }

  async deleteCourse(courseId: string) {
    const documentReference = doc(
      this.firestore,
      `courses/${courseId}`
    );
    await deleteDoc(documentReference);
  }

  async updateCourse(courseId: string, course: Partial<Course>) {
    const courseRef = doc(this.firestore, `courses/${courseId}`);
    await updateDoc(courseRef, course);
    // this.getCourse(course.id);
  }
}
