import { TestBed } from '@angular/core/testing';

import { AsdfService } from './asdf.service';

describe('AsdfService', () => {
  let service: AsdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
