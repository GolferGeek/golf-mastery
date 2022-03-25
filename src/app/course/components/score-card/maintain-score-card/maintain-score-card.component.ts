import { Component, Input, OnInit } from '@angular/core';
import { ScoreCard } from 'src/app/course/models/scoreCard.model';
import { TeesDetailPage } from 'src/app/course/tees/tees-detail/tees-detail.page';

@Component({
  selector: 'app-maintain-score-card',
  templateUrl: './maintain-score-card.component.html',
  styleUrls: ['./maintain-score-card.component.scss'],
})
export class MaintainScoreCardComponent implements OnInit {

  @Input() scoreCard: ScoreCard;

  constructor() { }

  ngOnInit() { }

  addTeeBox() {
    this.scoreCard.teeSet.push({color: '', distance: 200, par: 72, mensRating: 72, mensSlope: 120, womensRating: 72, womensSlope: 120, notes: ''})
  }

}
