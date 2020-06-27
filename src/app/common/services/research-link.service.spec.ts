import { TestBed } from '@angular/core/testing';

import { ResearchLinkService } from './research-link.service';

describe('ResearchLinkService', () => {
  let service: ResearchLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResearchLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
