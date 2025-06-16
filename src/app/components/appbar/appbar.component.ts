import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-appbar',
  imports: [MatToolbarModule , MatInputModule , MatIconModule , MatMenuModule , CommonModule],
  templateUrl: './appbar.component.html',
  styleUrl: './appbar.component.css'
})
export class AppbarComponent {
  isProfileOpen = false;
  toggleProfileDropdown() {
  this.isProfileOpen = !this.isProfileOpen;
}
}
