import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { Contacts, UserData } from '../data/users';

@Injectable()
export class UserService extends UserData {

  private time: Date = new Date;

  private users = {
    nick: { name: 'Sally P', picture: 'assets/images/nick.png' },
  };
  private types = {
    mobile: 'mobile',
    home: 'home',
    work: 'work',
  };
  private contacts: Contacts[] = [
    { user: this.users.nick, type: this.types.mobile },
  ];

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }


}