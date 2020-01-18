import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})  
export class LoginComponent implements OnInit {

  constructor(private authdata: AuthService, private frmbuilder:FormBuilder) { }
  signupForm:FormGroup;
  
  ngOnInit() {
    this.signupForm = this.frmbuilder.group({
      name:['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      mobile:['', [Validators.required, Validators.pattern(/^[1-9][0-9]{9}$/)]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)] ],
      cpassword:['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)] ]
    })
  }
  register_action(obj){
      console.log(obj);
  }

}
