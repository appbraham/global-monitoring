import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent implements OnInit {

  private userService = inject(UserService);
  private fb = inject(FormBuilder);

  public registerForm!:FormGroup;

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  registerUser(){
    if( this.registerForm?.invalid ) return;

    this.userService.registerUser(this.registerForm.value)
      .subscribe( res => {
        console.log("Registro exitoso");
        console.log(res);
      });
  }

}
