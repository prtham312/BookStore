import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-appbar',
  imports: [MatToolbarModule , MatInputModule , MatIconModule , MatMenuModule , CommonModule, LoginSignupComponent ],
  templateUrl: './appbar.component.html',
  styleUrl: './appbar.component.css'
})
export class AppbarComponent {
  constructor(private router : Router) {}
  isProfileOpen = false;
  isLoginOpen = false;
  toggleProfileDropdown() {
  this.isProfileOpen = !this.isProfileOpen;
}
  openLoginSignup(){
    this.isLoginOpen = true;
  }
}
