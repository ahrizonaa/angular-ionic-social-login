import { TestBed } from '@angular/core/testing';

import { IonicSocialLoginService } from './ionic-social-login.service';

describe('IonicSocialLoginService', () => {
  let service: IonicSocialLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicSocialLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
