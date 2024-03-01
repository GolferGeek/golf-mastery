import {Component, Input, OnInit} from '@angular/core';
import {TeeboxModel} from '../../../models/course/teebox.model'

@Component({
  selector: 'app-tee-box',
  templateUrl: './tee-box.component.html',
  styleUrls: ['./tee-box.component.scss'],
})
export class TeeBoxComponent implements OnInit {

  @Input() teeBoxes: TeeboxModel[] | undefined = [];

  constructor() { }

  ngOnInit() {}

}
