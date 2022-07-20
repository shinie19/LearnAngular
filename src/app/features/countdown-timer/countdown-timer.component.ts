import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit {
  @Input() timeStart: number = 10;
  timeRemain = this.timeStart;

  timer = setInterval(() => {}, 0);

  constructor() {}

  ngOnInit(): void {}

  start() {
    this.timer = setInterval(() => {
      this.timeRemain--;
      if (this.timeRemain === 0) clearInterval(this.timer);
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
  }

  reset() {
    this.timeRemain = this.timeStart;
  }
}
