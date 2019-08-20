import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  private username:String;
  constructor(private route:Router) { 
    this.username = window.localStorage.getItem("username");
  }

  ngOnInit() {
  }
  logoutpressed(){
    console.log("loggedout");
    window.localStorage.clear();
    this.route.navigateByUrl("/login");
    
  }

}
