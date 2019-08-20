import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormControl} from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder,private route:Router) { 

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
    if(this.form.get("username").value === "ohm" && this.form.get("password").value === "123"){
      window.localStorage.setItem("username",this.form.get("username").value);
      window.localStorage.setItem("password",this.form.get("password").value);
      this.route.navigateByUrl('/home');
    }else{
      alert("wrong credentials");
    }
  }

}
