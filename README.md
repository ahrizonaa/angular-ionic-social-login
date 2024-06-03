# NgxIonicSocialLogin

## Install

`npm i ionic-social-login`

## Usage

1.  Import:

```
import { IonicSocialLoginComponent } from 'ionic-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: true,
  imports: [IonicSocialLoginComponent],
})
export class SigninComponent {
```

2.  Inside of Angular template:

```
  <ngx-ionic-social-login
    [googleClientKey]="googleClientKey"
    [facebookClientKey]="facebookClientKey"
    (googleUser)="googleUserReceived($event)"
    (facebookUser)="facebookUserReceived($event)"
  ></ngx-ionic-social-login>

```

### Properties

#### `googleClientKey`

- Type: string
- Required: Yes
- Note: Developer must acquire this key from Google Cloud Console

#### `facebookClientKey`

- Type: string
- Required: Yes
- Note: Developer must acquire this key from Meta Developer Dashboard

### Events

#### `googleUser`

- Output Type:

```
type User {
    id: string;
    email: string;
    name: string;
    familyName: string;
    givenName: string;
    imageUrl: string;
    serverAuthCode: string;
    authentication: Authentication;
}

type Authentication {
    accessToken: string;
    idToken: string;
    refreshToken?: string;
}
```

- Required: No

#### `facebookUser`

- Output Type:

```
type User = {
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
```

- Required: No
