import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicSocialLoginComponent } from './ionic-social-login.component';

describe('IonicSocialLoginComponent', () => {
  let component: IonicSocialLoginComponent;
  let fixture: ComponentFixture<IonicSocialLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicSocialLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IonicSocialLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
