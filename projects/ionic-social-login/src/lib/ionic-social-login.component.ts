import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { isPlatform } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { logoFacebook, logoGoogle } from 'ionicons/icons';

import {
  GoogleAuth,
  InitOptions,
} from '@codetrix-studio/capacitor-google-auth';
import {
  FacebookLogin,
  FacebookLoginResponse,
} from '@capacitor-community/facebook-login';

import { User as GoogleUserType } from '@codetrix-studio/capacitor-google-auth';

type UserProfile = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  phoneNumberCountry: any;
  birthdate: string;
  country: any;
};

type GoogleUser = GoogleUserType;

type FacebookUser = {
  email: string;
  id: string;
  name: string;
  picture: {
    height: number;
    width: number;
    is_silhouette: boolean;
    url: string;
  };
};

type User = {
  email: string;
  name: string;
  imgUrl?: string;
  id: string;
  GoogleUser?: User | null;
  FacebookUser?: FacebookUser | null;
  profile?: UserProfile;
  profilePhotoUrl?: string;
};

const FACEBOOK_PERMISSIONS = ['email', 'public_profile'];

@Component({
  selector: 'ngx-ionic-social-login',
  standalone: true,
  imports: [IonButton, IonIcon],
  template: `
    <div class="signin-container">
      <ion-button
        expand="full"
        shape="round"
        color="light"
        style="width: 100%"
        (click)="SignInGoogle()"
      >
        <ion-icon name="logo-google" slot="start"></ion-icon>&nbsp; Continue
        With Google
      </ion-button>
      <ion-button
        expand="full"
        shape="round"
        color="light"
        style="width: 100%"
        (click)="SignInFacebook()"
      >
        <ion-icon
          style="color: #4267b2"
          slot="start"
          name="logo-facebook"
        ></ion-icon
        >&nbsp; Continue With Facebook
      </ion-button>
    </div>
  `,
  styles: `
    .signin-container {
      position: absolute;
      height: 100%;
      width: fit-content;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      padding-bottom: 25%;
    }
  `,
})
export class IonicSocialLoginComponent implements OnInit {
  @Output() googleUser: EventEmitter<GoogleUser> = new EventEmitter();
  @Output() facebookUser: EventEmitter<FacebookUser> = new EventEmitter();

  @Input() googleClientKey!: string;
  @Input() facebookClientKey!: string;

  constructor() {
    addIcons({
      logoFacebook,
      logoGoogle,
    });
  }

  ngOnInit(): void {
    if (!isPlatform('capacitor')) {
      if (this.googleClientKey) {
        this.InitGoogle(this.googleClientKey);
      }

      (async () => {
        if (this.facebookClientKey) {
          await this.InitFacebook(this.facebookClientKey);
        }
      })();
    }
  }

  async SignInGoogle() {
    let user = await GoogleAuth.signIn();
    if (user.email) {
      this.googleUser.emit(user);
    }
  }

  async SignInFacebook() {
    const result: FacebookLoginResponse = await FacebookLogin.login({
      permissions: FACEBOOK_PERMISSIONS,
    });

    if (result.accessToken && result.accessToken.token) {
      let user: FacebookUser = await FacebookLogin.getProfile({
        fields: ['email', 'name', 'picture'],
      });
      if (user.email) {
        this.facebookUser.emit(user);
      }
    }
  }

  InitGoogle(clientId: string) {
    let options: InitOptions = {
      clientId: clientId,
      scopes: ['profile'],
      grantOfflineAccess: true,
    };
    GoogleAuth.initialize(options);
  }

  async InitFacebook(appId: string) {
    await FacebookLogin.initialize({ appId });
  }
}
