/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbCardModule, NbSpinnerModule } from '@nebular/theme';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserProfileService } from '../@core/service/user-profile.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    NbCardModule,
    NbSpinnerModule,
    NbAuthModule, NbInputModule, NbCheckboxModule
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
  ],
  providers: [UserProfileService]
})
export class AuthModule {
}