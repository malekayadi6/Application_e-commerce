import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import {AuthRoutes} from "./auth.routes";
import {AuthService} from "../core/services/auth.service";
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(AuthRoutes),
    TranslateModule,
  ],
  declarations: [AuthComponent, LoginComponent, SignUpComponent],
  providers : [],
})
export class AuthModule { }
