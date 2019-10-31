/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoordsService } from './coords.service';

describe('Service: Coords', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoordsService]
    });
  });

  it('should ...', inject([CoordsService], (service: CoordsService) => {
    expect(service).toBeTruthy();
  }));
});
