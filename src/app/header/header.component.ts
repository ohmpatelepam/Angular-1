import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelService } from '../model.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  private username:String;
  constructor(private route:Router,private model:ModelService) { 
    this.username = window.localStorage.getItem("username");
  }

  ngOnInit() {
  }
  logoutpressed(){
    console.log("loggedout");
    window.localStorage.clear();
    this.model.toggleLoggedIn();
    this.route.navigateByUrl("/login");
    
  }

}
