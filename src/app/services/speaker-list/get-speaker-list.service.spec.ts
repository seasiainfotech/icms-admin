import { TestBed, inject } from '@angular/core/testing';

import { GetSpeakerListService } from './get-speaker-list.service';

describe('GetSpeakerListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSpeakerListService]
    });
  });

  it('should be created', inject([GetSpeakerListService], (service: GetSpeakerListService) => {
    expect(service).toBeTruthy();
  }));
});
