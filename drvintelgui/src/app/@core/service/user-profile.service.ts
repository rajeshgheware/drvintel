import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { User } from '../data/users';
import { UserSignup } from '../data/user-signup';

@Injectable()
export class UserProfileService {

  constructor(private http: HttpClient) { }

  updateUserProfile(user: User): Observable<any> {
    let URL = './users/user-profile';
    return this.http.post(URL, user).pipe(
      map((res: any) => res.json()),
      catchError(<T>(error: any, result?: T) => {
        console.log(error);
        return of(result as T);
      })
    );
  }
  forgotPwdRequest(email): any {
    return this.http.post("./forgot-password/email", email).pipe(
      map((res: any) => res.json()),
      catchError(<T>(error: any, result?: T) => {
        console.log(error);
        return of(result as T);
      })
    );
  }

  validateToken(tokenToValidate): any {
    const tokenValidationUri = "./reset-password/validatetoken/?token=" + tokenToValidate;
    return this.http.get(tokenValidationUri, { responseType: 'text' }).pipe(
      map((res: any) => res.json()),
      catchError(<T>(error: any, result?: T) => {
        console.log(error);
        return of(result as T);
      })
    );
  }
  resetPassword(pwd, token): any {
    const paylodChangePassword = {
      "password": pwd,
      "token": token
    };
    return this.http.post("./reset-password/changepassword", paylodChangePassword, { responseType: 'text' }).pipe(
      map((res: any) => res,
        catchError(<T>(error: any, result?: T) => {
          console.log(error);
          return of(result as T);
        })
      ));

  }
  userSignupRequest(user: UserSignup): any {
    let URL = './user-signup';
    return this.http.post(URL, user).pipe(
      map((res: any) => res.json()),
      catchError(<T>(error: any, result?: T) => {
        console.log(error);
        return of(result as T);
      })
    );
  }

}
