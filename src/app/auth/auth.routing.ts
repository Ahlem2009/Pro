import {  Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component'


export const AuthRoutingModule: Routes = [
  {path:"auth",component:LoginComponent},
  {path:"sign-up",component:RegisterComponent},
 
  
]
