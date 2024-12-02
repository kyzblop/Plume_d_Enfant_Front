import { TestBed } from '@angular/core/testing';

import { HistoireService } from './histoire.service';

describe('HistoireService', () => {
  let service: HistoireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
