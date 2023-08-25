import { TestBed } from '@angular/core/testing';

import { UploadnotesServiceService } from './uploadnotes-service.service';

describe('UploadnotesServiceService', () => {
  let service: UploadnotesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadnotesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
