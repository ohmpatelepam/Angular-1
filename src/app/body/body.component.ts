import { Component, OnInit, Input } from '@angular/core';
import { ModelService, obj } from '../model.service';
import {ActivatedRoute} from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() private data:Map<String,Array<obj>>;
  displayPopUp:boolean;
  popUpData:Object;
  displayAddNews:boolean;
  subscription: Subscription;
  constructor(private model:ModelService,private route: ActivatedRoute) { 
    this.data = undefined;   
    this.displayPopUp = false;
    this.displayAddNews = false;
    this.popUpData = {};
  }

  ngOnInit() {
    let scope = this;
    this.route.params.subscribe( params => { 
      console.log(params);
      scope.data = this.model.getFilterData(params);
      console.log(scope.data);
    });
    this.model.onAddNew.subscribe((value) =>{
      this.displayAddNews = value;
    })
    console.log("subsctiption");
    this.subscription = this.model.getMessage().subscribe(message => { 
      console.log(message);
      this.data = message; 
    });
    
  }
  continueReadingPressed(value){
    console.log("this.continueReadingPressed");
    this.displayPopUp = true;
    this.popUpData = value;
  }
 

  
}
