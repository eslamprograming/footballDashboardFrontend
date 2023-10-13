/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LeagueService } from './League.service';

describe('Service: League', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeagueService]
    });
  });

  it('should ...', inject([LeagueService], (service: LeagueService) => {
    expect(service).toBeTruthy();
  }));
});
