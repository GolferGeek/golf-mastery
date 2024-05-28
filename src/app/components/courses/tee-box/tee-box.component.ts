import {Component, Input, OnInit} from '@angular/core';
import {TeeboxModel} from '../../../models/course/teebox.model'

@Component({
  selector: 'app-tee-box',
  templateUrl: './tee-box.component.html',
  styleUrls: ['./tee-box.component.scss'],
})
export class TeeBoxComponent implements OnInit {

  @Input() teeBoxes: TeeboxModel[] | undefined = [];
  newTeeBox: Partial<TeeboxModel> = {
    name: '',
    par: 0,
    totalYards: 0,
    womensSlope: 0,
    womensRating: 0,
    mensSlope: 0,
    mensRating: 0,
  };

  readonly: boolean = true;

  constructor() { }

  ngOnInit() { }

  addTeeBox() {
    this.teeBoxes?.push(this.newTeeBox as TeeboxModel);
    this.newTeeBox = {
      name: '',
      par: 0,
      totalYards: 0,
      womensSlope: 0,
      womensRating: 0,
      mensSlope: 0,
      mensRating: 0,
    };
  }
}
