import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CourseService } from '../../course.service';
import { Tees } from '../../models/tees.model';

@Component({
  selector: 'app-tees-list',
  templateUrl: './tees-list.page.html',
  styleUrls: ['./tees-list.page.scss'],
})
export class TeesListPage implements OnInit {
  teesList$: Observable<Tees[]>;
  courseId: string;
  constructor(
    private courseService: CourseService,
    private readonly route: ActivatedRoute,
    private router: Router
  ) {
    this.teesList$ = courseService.currentTees$;
  }
  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    this.initializeTees();
  }
  initializeTees() {
    this.teesList$ = this.courseService.currentTees$;
  }
  navigateToNewTees() {
    this.router.navigateByUrl(`course/${this.courseId}/tees/new`);
  }
}
