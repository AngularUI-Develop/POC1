import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/components/login.component';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './login.route';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(LoginRoutes),    
    CommonModule
  ]
})
export class LoginModule { }
