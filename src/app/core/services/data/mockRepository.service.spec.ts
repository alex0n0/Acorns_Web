import { TestBed } from '@angular/core/testing';

import { FakeRepositoryService } from './fakeRepository.service';

describe('FakeRepositoryService', () => {
  let service: FakeRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
