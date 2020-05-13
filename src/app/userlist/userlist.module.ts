import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './component/userlist.component';
import { RouterModule } from '@angular/router';
import { UserListRoutingModule } from './userlist.route';
import { UserService } from '../services/get-userlist';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [UserlistComponent],
  imports: [
    UserListRoutingModule,    
    CommonModule,HttpClientModule
  ],
  providers:[UserService]
})
export class UserlistModule { }
