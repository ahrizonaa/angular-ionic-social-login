import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularIonicSocialLoginComponent } from './angular-ionic-social-login.component';

describe('AngularIonicSocialLoginComponent', () => {
  let component: AngularIonicSocialLoginComponent;
  let fixture: ComponentFixture<AngularIonicSocialLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularIonicSocialLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularIonicSocialLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
