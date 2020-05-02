import { TestBed } from '@angular/core/testing';

import { LinechartsService } from './linecharts.service';

describe('LinechartsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinechartsService = TestBed.get(LinechartsService);
    expect(service).toBeTruthy();
  });
});
