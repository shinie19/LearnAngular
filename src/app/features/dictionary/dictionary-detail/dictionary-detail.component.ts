import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IWord } from '../../../service/word';
import { DictionaryService } from '../../../service/dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss'],
})
export class DictionaryDetailComponent implements OnInit {
  wordDetail: IWord = {
    word: '',
    mean: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private dictionaryService: DictionaryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const word = paramMap.get('word') || '';
      this.wordDetail.word = this.dictionaryService.getWord(word)?.word || '';
      this.wordDetail.mean = this.dictionaryService.getWord(word)?.mean || '';
    });
  }
}
