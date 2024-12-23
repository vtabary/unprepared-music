import { TestBed } from '@angular/core/testing';

import { ProjectsHistoryService } from './project-history.service';

describe('ProjectsHistoryService', () => {
  let service: ProjectsHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
