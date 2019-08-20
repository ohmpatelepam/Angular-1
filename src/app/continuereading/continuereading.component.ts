import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {obj} from '../model.service';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-continuereading',
  templateUrl: './continuereading.component.html',
  styleUrls: ['./continuereading.component.css']
})
export class ContinuereadingComponent implements OnInit {
  @Input() private data:obj;
  @Output() private display = new EventEmitter();
  constructor() {
    
  }
  ngOnInit() {
  
  }
  closePressed(){
    console.log("close pressed");
    this.display.emit("false");
  }

}
