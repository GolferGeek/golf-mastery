import {Injectable, signal} from '@angular/core';
import {
  getFirestore,
  getDoc,
  doc,
  addDoc,
  collection,
  setDoc,
  deleteDoc,
  where,
  query,
  getDocs,
  collectionData,
  docData
} from '@angular/fire/firestore'
import {CourseModel} from '../models/course/course.model'
import { BehaviorSubject, Subscription, firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CourseService {
  newCourse: CourseModel = {
    id: null,
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    website: '',
    teeBoxes: [
      {
        name: 'red',
        par: 72,
        totalYards: 5500,
        womensSlope: 110,
        womensRating: 75,
        mensSlope: 110,
        mensRating: 75,
      },
      {
        name: 'white',
        par: 72,
        totalYards: 6500,
        womensSlope: 120,
        womensRating: 70,
        mensSlope: 120,
        mensRating: 70,
      },
      {
        name: 'blue',
        par: 72,
        totalYards: 7000,
        womensSlope: 130,
        womensRating: 65,
        mensSlope: 130,
        mensRating: 65,
      },
    ],
  };

  private firestore = getFirestore();

  coursesSubject = new BehaviorSubject<CourseModel[]>([]);
  courses$ = this.coursesSubject.asObservable();
  coursesSubscription: Subscription;

  courseSubject = new BehaviorSubject<CourseModel>(null);
  course$ = this.courseSubject.asObservable();
  courseSubscription: Subscription;

  constructor() {
    this.getCourses('MN');
  }

  destructor() {
    if (this.courseSubscription) this.courseSubscription.unsubscribe();
    if (this.coursesSubscription) this.coursesSubscription.unsubscribe();
  }

  getCourses(state: string) {
    const coursesQuery = query(
      collection(this.firestore, `courses`),
      where('state', '==', state)
    );
    this.coursesSubscription = collectionData(coursesQuery).subscribe(
      (courses) => this.coursesSubject.next(courses as CourseModel[])
    );
  }

  getCourse(id: string) {
    this.courseSubscription = docData(
      doc(this.firestore, 'courses', id)
    ).subscribe((courseDoc) => {
      this.courseSubject.next(courseDoc as CourseModel);
    });
  }

  async addCourse(course: CourseModel) {
    const docRef = await addDoc(collection(this.firestore, `courses`), course );
    setDoc(docRef, { id: docRef.id }, { merge: true });
  }

  async deleteCourse(courseId: string) {
    await deleteDoc(doc(this.firestore, `courses/${courseId}`));
  }

  async updateCourse(course: CourseModel) {
    await setDoc(doc(this.firestore, `courses/${course.id}`), course);
  }

  getNewCourse() {
    this.courseSubject.next(this.newCourse);
  }
}
