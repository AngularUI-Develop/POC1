import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from '../userlist/component/userlist.component'
const routes: Routes=[
{
    path: '',
    component: UserlistComponent
}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserListRoutingModule { }