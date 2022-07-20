import { Component, Input, OnInit } from '@angular/core';
import { IRatingUnit } from './IRatingUnit';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.scss'],
})
export class RatingBarComponent implements OnInit {
  @Input() max = 10;
  @Input() ratingValue = 5;

  ratingUnits: Array<IRatingUnit> = [];

  constructor() {}

  ngOnInit(): void {
    this.getRatingUnits();
    this.changeRating(this.ratingValue);
  }

  changeRating(value: number) {
    this.ratingUnits.forEach((unit) => {
      if (unit.value <= value) {
        unit.isActive = true;
      } else unit.isActive = false;
    });
  }

  getRatingUnits() {
    for (let i = 1; i <= this.max; i++) {
      let unit: IRatingUnit = {
        value: i,
        isActive: false,
      };
      this.ratingUnits.push(unit);
    }
  }

  clicked(value: number) {
    // console.log(value);
    this.ratingValue = value;
    this.changeRating(value);
  }
}
