import { Component, OnDestroy } from '@angular/core';


@Component({
  selector: 'ngx-contacts',
  styleUrls: ['./contacts.component.scss'],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnDestroy {

  private alive = true;

  contacts: any[];
  recent: any[];

  constructor() {

  }

  ngOnDestroy() {
    this.alive = false;
  }
}
