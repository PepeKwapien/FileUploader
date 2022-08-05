import { TestBed } from '@angular/core/testing';

import { UploadFormUiServiceService } from './upload-form-ui-service.service';

describe('UploadFormUiServiceService', () => {
  let service: UploadFormUiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadFormUiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
