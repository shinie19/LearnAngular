import { Component, OnInit } from '@angular/core';
import { Pet } from './pet';

@Component({
  selector: 'app-show-pet-info',
  templateUrl: './show-pet-info.component.html',
  styleUrls: ['./show-pet-info.component.scss'],
})
export class ShowPetInfoComponent implements OnInit {
  pet: Pet = {
    name: 'puppie',
    image:
      'https://i.pinimg.com/originals/21/59/c4/2159c493313c6084db38bee8e69a4fab.jpg',
  };

  constructor() {}

  ngOnInit(): void {}
}
