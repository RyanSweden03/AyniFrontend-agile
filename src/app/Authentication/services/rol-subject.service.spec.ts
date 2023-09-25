import { TestBed } from '@angular/core/testing';

import { RolSubjectService } from './rol-subject.service';

describe('RolSubjectService', () => {
  let service: RolSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
