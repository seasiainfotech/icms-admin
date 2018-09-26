import { TestBed, inject } from '@angular/core/testing';

import { SessionsListService } from './sessions-list.service';

describe('SessionsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionsListService]
    });
  });

  it('should be created', inject([SessionsListService], (service: SessionsListService) => {
    expect(service).toBeTruthy();
  }));
});
