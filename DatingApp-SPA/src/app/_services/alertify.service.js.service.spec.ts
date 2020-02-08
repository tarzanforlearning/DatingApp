/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Alertify.service.jsService } from './alertify.service.js.service';

describe('Service: Alertify.service.js', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Alertify.service.jsService]
    });
  });

  it('should ...', inject([Alertify.service.jsService], (service: Alertify.service.jsService) => {
    expect(service).toBeTruthy();
  }));
});
