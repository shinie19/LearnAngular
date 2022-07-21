import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../../../service/dictionary.service';
import { IWord } from '../../../service/word';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.scss'],
})
export class DictionaryPageComponent implements OnInit {
  words: IWord[] = [];
  word: IWord = {
    word: '',
    mean: '',
  };
  search: string = '';

  constructor(private dictionaryService: DictionaryService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.words = this.dictionaryService.getAll();
  }
}
