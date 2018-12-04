import { TestBed } from '@angular/core/testing';

import { EstudantesServiceService } from './estudantes-service.service';

describe('EstudantesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstudantesServiceService = TestBed.get(EstudantesServiceService);
    expect(service).toBeTruthy();
  });
});
