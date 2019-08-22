import { Component, OnInit } from '@angular/core';
import { ModelService,obj } from '../model.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedIn:boolean;
  constructor(private model:ModelService,private route:Router) {
    this.loggedIn = false;
   }
  
  ngOnInit() {
    this.loggedIn = this.model.getLoginStatus();
    if(!this.loggedIn){
      alert("Unauthorized Access Denied");
      return;
    }
  }

}
