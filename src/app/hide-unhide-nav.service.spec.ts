import { TestBed, inject } from '@angular/core/testing';

import { HideUnhideNAvService } from './hide-unhide-nav.service';

describe('HideUnhideNAvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HideUnhideNAvService]
    });
  });

  it('should be created', inject([HideUnhideNAvService], (service: HideUnhideNAvService) => {
    expect(service).toBeTruthy();
  }));
});
