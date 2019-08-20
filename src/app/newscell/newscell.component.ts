import { Component, OnInit, Input, AfterViewInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newscell',
  templateUrl: './newscell.component.html',
  styleUrls: ['./newscell.component.css']
})
export class NewscellComponent implements OnInit {

  @Input() image: string;
  @Input() source: string;
  @Input() date: string;
  @Input() author: string;
  @Input() description: String;

  @Output() continueReadingPressed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  
  }
  buttonPressed(){
    console.log("button presssed");
    this.continueReadingPressed.emit({imageText:this.image,
      sourceText:this.source,
      dateText:this.date,
      authorText:this.author,
      descriptionText:this.description
    });
  }
}
