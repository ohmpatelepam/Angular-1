import { Component, OnInit } from '@angular/core';
import { ModelService,obj } from '../model.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private model:ModelService,private route:Router) { }

  ngOnInit() {
    //this.route.navigateByUrl('/home/bodycomponent/all');
  }

}
