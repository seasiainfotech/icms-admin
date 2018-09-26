import { TestBed, inject } from '@angular/core/testing';

import { GetGuestListService } from './get-guest-list.service';

describe('GetGuestListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetGuestListService]
    });
  });

  it('should be created', inject([GetGuestListService], (service: GetGuestListService) => {
    expect(service).toBeTruthy();
  }));
});
