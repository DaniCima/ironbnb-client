import { TestBed } from '@angular/core/testing';

import { IronbnbAPIService } from './ironbnb-api.service';

describe('IronbnbAPIService', () => {
  let service: IronbnbAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IronbnbAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
