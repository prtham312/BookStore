import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AppbarComponent } from '../appbar/appbar.component';
import { Output , EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthService } from '../../services/auth.service';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-signup',
  imports: [MatCardModule , CommonModule , MatIconModule , MatFormFieldModule , MatInputModule , MatTabsModule , ReactiveFormsModule  ],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {
@Output() close = new EventEmitter<void>();
hidepassword = true;
constructor(private fb : FormBuilder , private authService : AuthService){}
loginForm! : FormGroup;
signupForm! : FormGroup;
ngOnInit(): void{
  this.loginForm = this.fb.group({
    email : ['' , [Validators.required , Validators.email]],
    password : ['' , [Validators.required]]
  });
  this.signupForm = this.fb.group({
    fullName : ['' , [Validators.required]],
    email : ['' , [Validators.required , Validators.email]],
    password : ['' , [Validators.required]],
    phoneNumber : ['' , [Validators.required , Validators.pattern(/^\d{10}$/)]]
  })
}
onLoginSubmit() :void{
  if(this.loginForm.invalid){
    this.loginForm.markAllAsTouched();
    return;
  }
  const loginData = {
    email : this.loginForm.value.email,
    password : this.loginForm.value.password
  };
  this.authService.login(loginData).subscribe({
    next : (response : any) => {
      localStorage.setItem('token' , response.result.accessToken)
      console.log("Login Succesfull");
      this.close.emit();

    },
    error: (err) => {
      console.error("Login failed", err);
    }
  })
}
onSignupSubmit() : void{
  if(this.signupForm.invalid){
    this.signupForm.markAllAsTouched();
    return;
  }
  const signupData = {
    fullName : this.signupForm.value.fullName,
    email : this.signupForm.value.email,
    password : this.signupForm.value.password,
    phone : this.signupForm.value.phoneNumber
  }
  console.log(this.signupForm.value)
  this.authService.signup(signupData).subscribe({
    next: (res: any) => {
      console.log('Signup successful');
      this.close.emit();
    },
    error: (err) => {
      console.error('Signup failed', err);
    }
  });
}

}
