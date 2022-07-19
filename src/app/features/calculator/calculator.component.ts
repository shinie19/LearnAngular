import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  firstNum = 0;
  secondNum = 0;
  result = 0;
  operation = 'addition';

  constructor() {}

  ngOnInit(): void {}

  onChange() {
    switch (this.operation) {
      case 'addition':
        this.result = this.firstNum + this.secondNum;
        break;
      case 'subtraction':
        this.result = this.firstNum - this.secondNum;
        break;
      case 'multiplication':
        this.result = this.firstNum * this.secondNum;
        break;
      case 'division':
        this.result = this.firstNum / this.secondNum;
        break;
    }
    console.log(this.firstNum);
  }
}
