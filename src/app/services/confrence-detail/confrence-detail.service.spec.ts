import { TestBed, inject } from '@angular/core/testing';

import { ConfrenceDetailService } from './confrence-detail.service';

describe('ConfrenceDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfrenceDetailService]
    });
  });

  it('should be created', inject([ConfrenceDetailService], (service: ConfrenceDetailService) => {
    expect(service).toBeTruthy();
  }));
});
