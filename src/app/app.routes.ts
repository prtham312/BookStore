import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';

export const routes: Routes = [
    {path : '' , redirectTo:"dashboard" , pathMatch:'full'},
    {path : 'dashboard' , 
    component:DashboardComponent ,
    children: [
    ]
    },
    {path: 'login' , component:LoginSignupComponent}
];
