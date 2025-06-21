import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInput } from '@angular/material/input';


@Component({
  selector: 'app-forgot-password',
  imports: [MatCardModule , MatInput],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

}
