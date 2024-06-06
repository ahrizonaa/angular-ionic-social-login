import { TestBed } from '@angular/core/testing';

import { AngularIonicSocialLoginService } from './angular-ionic-social-login.service';

describe('AngularIonicSocialLoginService', () => {
  let service: AngularIonicSocialLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularIonicSocialLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
