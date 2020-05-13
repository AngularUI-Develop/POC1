import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationModule } from './registration/registration.module';
import { UserlistModule } from './userlist/userlist.module';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/components/login.component';
const routes: Routes = [
  { path: '',  pathMatch: 'full' ,redirectTo: ''},
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationModule' },
  { path: 'userlist', loadChildren: './userlist/userlist.module#UserlistModule' }
];
@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }