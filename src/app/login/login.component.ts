import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormControl} from '@angular/forms';
import { Router} from '@angular/router';
import { ModelService } from '../model.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder,private route:Router,private model:ModelService) { 

  }

  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.form = this.fb.group({
          username: new FormControl('',[Validators.required]),
          password: new FormControl('',[Validators.required]),
        });
  }
  loginClicked(){
    if(this.form.get("username").value === this.model.getUsername() && this.form.get("password").value === this.model.getPassword()){
      window.localStorage.setItem("username",this.form.get("username").value);
      window.localStorage.setItem("password",this.form.get("password").value);
      this.model.toggleLoggedIn();
      this.route.navigateByUrl(window.localStorage.getItem("username") + '/home/bodycomponent/all');
    }else{
      alert("wrong credentials");
    }
  }
  changeCredentials(){
    let username = this.form.get("username").value;
    let password = this.form.get("password").value;
    if(this.model.changeUsernamePassword(username,password)){
      alert("successfully changed");
    }else{
      alert("cannot able to change");
    }
    
  }

}
