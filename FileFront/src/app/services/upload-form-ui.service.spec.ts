import { TestBed } from '@angular/core/testing';

import { UploadFormUiService } from './upload-form-ui.service';

describe('UploadFormUiService', () => {
  let service: UploadFormUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadFormUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
