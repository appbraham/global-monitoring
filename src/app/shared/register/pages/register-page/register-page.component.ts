import { Component } from '@angular/core';
import { RegisterComponent } from '../../components/register/register.component';
import { WelcomeComponent } from '../../../login/components/welcome/welcome.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RegisterComponent, WelcomeComponent],
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

}
