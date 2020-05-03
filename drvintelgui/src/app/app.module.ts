/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbRoleProvider, NbSecurityModule } from '@nebular/security';
import { NbChatModule, NbDatepickerModule, NbDialogModule, NbMenuModule, NbSidebarModule, NbToastrModule, NbWindowModule } from '@nebular/theme';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard.service';
import { GlobalErrorHandler } from './GlobalErrorHandler';
import { RoleProvider } from './role.provider';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,

            key: 'access_token', // this parameter tells where to look for the token
          },
          baseEndpoint: '',
          login: {
            // ...
            endpoint: '/api/authenticate',
            method: 'post',
          },
          logout: {
            // ...
            endpoint: '/logout',
            method: 'get',
          },
        }),
      ],
      forms: {
        login: {
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        register: {
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        requestPassword: {
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        resetPassword: {
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        logout: {
          redirectDelay: 0,
        },
      },
    }),
    NbSecurityModule.forRoot({
      accessControl: {
        guest: {
          view: ['slider'],
        },
        ROLE_USER: {
          view: ['project', 'user', 'support', 'support-email', 'logout'],
        },
        ROLE_ACCOUNT: {
          parent: 'ROLE_USER',
          view: ['project', 'allocation', 'user', 'support', 'support-email', 'logout'],
          create: ['project', 'allocation', 'user', 'support', 'support-email', 'logout'],
          remove: ['project', 'allocation', 'user', 'support', 'support-email', 'logout'],
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: NbRoleProvider, useClass: RoleProvider },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
})
export class AppModule {
}
