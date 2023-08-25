import { TestBed } from '@angular/core/testing';

import { UploaderprofileService } from './uploaderprofile.service';

describe('UploaderprofileService', () => {
  let service: UploaderprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploaderprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
