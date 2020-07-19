import { TestBed } from '@angular/core/testing';

import { AddedByUserService } from './added-by-user.service';

describe('AddedByUserService', () => {
  let service: AddedByUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddedByUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
