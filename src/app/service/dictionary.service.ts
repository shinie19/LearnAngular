import { Injectable } from '@angular/core';
import { IWord } from './word';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  words: Array<IWord> = [
    {
      word: 'Appoint',
      mean: 'Bổ nhiệm',
    },
    {
      word: 'Demolish',
      mean: 'Phá hủy',
    },
    {
      word: 'Direction',
      mean: 'Chỉ dẫn',
    },
    {
      word: 'Graze',
      mean: 'Chăn thả',
    },
    {
      word: 'Ability',
      mean: 'Khả năng',
    },
    {
      word: 'Proposal',
      mean: 'Bản kiến nghị, đề xuất',
    },
    {
      word: 'Merger',
      mean: 'Sự sát nhập',
    },
    {
      word: 'Lease',
      mean: 'Hợp đồng cho thuê (n), thuê (v)',
    },
    {
      word: 'Briefcase',
      mean: 'Hành lý',
    },
    {
      word: 'Assessment',
      mean: 'Sự định giá',
    },
    {
      word: 'Fasten',
      mean: 'Buộc, đeo',
    },
    {
      word: 'Hallway',
      mean: 'Hành lang',
    },
  ];

  constructor() {}

  getAll() {
    return this.words;
  }

  getWord(word: string) {
    return this.words.find((w) => w.word === word);
  }
}
