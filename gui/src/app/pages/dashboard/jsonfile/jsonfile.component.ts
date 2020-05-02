import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-jsonfile',
  templateUrl: './jsonfile.component.html',
  styleUrls: ['./jsonfile.component.scss']
})
export class JsonfileComponent {
  title = 'pro1';
 
  
    userData: any= [
      {name:"Sandeep", addr: "Pune", profile: "Dev"},
      {name:"Akash", addr: "Pune", profile: "Dev"},
      {name:"Shashank", addr: "Pune", profile: "Dev"},
      {name:"Rajan", addr: "Latur", profile: "Dev"},
      {name:"Sajan", addr: "Latur", profile: "Dev"},
    ];

    constructor(){
      console.log(this.userData);
    }

}
