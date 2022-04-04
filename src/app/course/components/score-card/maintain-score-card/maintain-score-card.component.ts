import { Component, Input, OnInit } from '@angular/core';
import { ScoreCard, Tees } from 'src/app/course/models/scoreCard.model';

@Component({
  selector: 'app-maintain-score-card',
  templateUrl: './maintain-score-card.component.html',
  styleUrls: ['./maintain-score-card.component.scss'],
})
export class MaintainScoreCardComponent implements OnInit {

  @Input() scoreCard: ScoreCard;
  blankTees = { color: '', distance: null, par: 4, mensRating: null, womensRating: null, mensSlope: null, womensSlope: null, notes: '' };
  editTees: Tees;

  constructor() { }

  ngOnInit() {
    this.editTees = { ...this.blankTees };
  }

  addTeeBox() {
    this.scoreCard.teeSet.push({ ...this.editTees })
    this.editTees = { ...this.blankTees };
  }

  deleteTeeBox(teesToDelete: Tees) {
    this.scoreCard.teeSet = this.scoreCard.teeSet.filter(tees => tees.color !== teesToDelete.color);
  }

}
