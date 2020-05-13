import { Route } from '@angular/router';
import { LoginComponent } from '../login/components/login.component';
import { UserlistComponent } from '../userlist/component/userlist.component';
import { RegistrationComponent } from '../registration/component/registration.component';
export const LoginRoutes: Route[]=[
{
    path: '',
    component: LoginComponent
    ,children: [
        { path: 'registration',  component: RegistrationComponent },
        { path: 'userlist', component: UserlistComponent }
        ]  
}
]