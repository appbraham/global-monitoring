import { Component } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginComponent, WelcomeComponent],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {

}
