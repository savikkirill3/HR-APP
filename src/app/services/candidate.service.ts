import { Candidate } from '../models/candidate.model';

export class CandidateService {
  private candidates = [
    new Candidate(
      1,
      'Serj',
      'http://www.musicofarmenia.com/sites/default/files/styles/colorbox/public/musician/photo/Serj%20Tankian.jpg?itok=ixV-Evwc'
    ),
    new Candidate(
      2,
      'Till',
      'https://hochu.ua/thumbnails/articles/cropr_640x490/86571_0.jpg'
    ),
    new Candidate(
      3,
      'Сергей',
      'https://mykharkov.info/wp-content/uploads/2017/05/AFAt2tAN.jpeg'
    )
  ];

  getCandidates() {
    // FIXME: make a deep copy of the candidates ??
    return [...this.candidates];
  }

  getCandidate(id: number): Candidate {
    const foundCandidate = this.candidates.find(
      candidate => candidate.id === id
    );
    // FIXME: make a deep copy of the candidate
    return foundCandidate;
  }
}
