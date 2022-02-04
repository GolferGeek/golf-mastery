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
import { Tees } from './models/tees.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courses$: Observable<Course[]>;
  currentCourse$: Observable<Course>;
  currentTees$: Observable<Tees[]>;

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
    this.currentCourse$ = docData(courseRef, {
      idField: 'id',
    }) as Observable<Course>;

    this.getTees(courseId);
    return this.currentCourse$;
  }

  getTees(courseId: string) {
    const teesCollection = collection(this.firestore, `courses/${courseId}/tees`);
    this.currentTees$ = collectionData(teesCollection, {
      idField: 'id',
    }) as Observable<Tees[]>;
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
