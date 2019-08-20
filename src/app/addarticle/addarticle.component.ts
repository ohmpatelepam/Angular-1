import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { obj,ModelService } from '../model.service';
import { FormGroup, FormBuilder,Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {

  form:FormGroup;
  newData:obj;
  constructor(private route:Router,private model:ModelService,private fb:FormBuilder) { 
    this.newData = {
      sourceText : "",
      descriptionText : "",
      contentText: "",
      authorText:"",
      dateText:"",
      imageurlText:""
    };
  }
  createForm(){
    this.form = this.fb.group({
          heading: new FormControl('',[Validators.required]),
          description: new FormControl('',[Validators.required]),
          content:new FormControl('',[Validators.required]),
          date:new FormControl('',[Validators.required]),
          author:new FormControl('',[Validators.required]),
          sourceURL:new FormControl('',[Validators.required])
        });
  }

  ngOnInit() {
    this.createForm();
  }
  
   saveClicked(){
    
    alert("News Successfully Added");
    this.route.navigateByUrl('/home/bodycomponent/all');
  }
  validate(heading,description,content,author,date){
   if(heading == "" || description == "" || content == "" || author == "" || date == ""){
     alert("All the fields are necessarcy except image");
     return false;
   }
   return true;
  }
  cancel(){
    this.route.navigateByUrl('/home/bodycomponent/all');
  }
}
