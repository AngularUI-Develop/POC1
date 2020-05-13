import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './component/registration.component';
import { UserService } from '../services/get-userlist';
import { RegistrationRoutingModule } from './registration.route';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    RegistrationRoutingModule,    
    CommonModule,HttpClientModule,ReactiveFormsModule
  
  ],
  providers:[UserService]
})
export class RegistrationModule { }
