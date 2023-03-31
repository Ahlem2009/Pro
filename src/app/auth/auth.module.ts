
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { AuthRoutingModule } from './auth.routing';
// import { NgxPaginationModule } from 'ngx-pagination';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
LoginComponent,
RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AuthRoutingModule),
  ]
})
export class AuthModule { }
