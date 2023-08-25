import { TestBed } from '@angular/core/testing';

import { UploadnotesService } from './uploadnotes.service';

describe('UploadnotesService', () => {
  let service: UploadnotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadnotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
