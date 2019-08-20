import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ModelService } from '../model.service';
import { Router, RouterModule} from '@angular/router';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  
})
export class AsideComponent implements OnInit {

  public newsList:any;
  // @Output() key: EventEmitter<boolean> = new EventEmitter();
  constructor(private model:ModelService,private route:Router) { 
    this.newsList = undefined;
  }

  ngOnInit() {
    this.newsList = this.model.getData();
  }
  changedNews(news){
    console.log(news);
    this.route.navigateByUrl("/home/bodycomponent/" + news);
  }


}
