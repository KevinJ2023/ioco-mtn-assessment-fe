import { TestBed } from '@angular/core/testing';

import { ServiceItemService } from './serviceItem.service';

describe('ServiceItemService', () => {
  let service: ServiceItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
