import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-component',
  templateUrl: './like-component.component.html',
  styleUrls: ['./like-component.component.scss'],
})
export class LikeComponentComponent implements OnInit {
  like = 0;

  constructor() {}

  ngOnInit() {}

  likeThis() {
    this.like++;
  }
}
