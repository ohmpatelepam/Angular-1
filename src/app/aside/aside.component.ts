import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ModelService } from '../model.service';
import { Router, RouterModule} from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  
})
export class AsideComponent implements OnInit {

  public newsList:any;
  subscription: Subscription;
  constructor(private model:ModelService,private route:Router) { 
    this.newsList = undefined;
  }

  ngOnInit() {
    this.newsList = this.model.getData();
    this.subscription =  this.model.getMessage().subscribe((value) => {
      this.newsList = value;
    })
  }
  changedNews(news){
    console.log(news);
    this.route.navigateByUrl(window.localStorage.getItem("username") + "/home/bodycomponent/" + news);
  }
  addNewsClicked(){
    this.model.signalAddNews(true);
  }


}
