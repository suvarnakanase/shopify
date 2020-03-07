import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms' ;
import { CrudServiceService } from '../crud-service.service';
import { Router } from '@angular/router';
import { DatatransferService } from '../datatransfer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})  
export class LoginComponent implements OnInit {

  constructor(private authdata: AuthService, private frmbuilder:FormBuilder, private crud : CrudServiceService, private router:Router, private ds: DatatransferService ) { }
  signupForm:FormGroup;
  loginForm:FormGroup;
  
  ngOnInit() {
    this.signupForm = this.frmbuilder.group({
      name:['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      mobile:['', [Validators.required, Validators.pattern(/^[1-9][0-9]{9}$/)]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)] ],
      cpassword:['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)] ]
    });

    this.loginForm = this.frmbuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)] ]
    })
  }
  regmsg: string = ""
  register_action(obj){
      console.log(obj);
      delete obj.value.cpassword;
      this.crud.add(obj.value, "userDetails").subscribe(
        (res)=>{
          console.log(res);
          this.regmsg = "User added";
        }
      )
  }

  loginmsg: string = ""
  login_action(obj){
      console.log(obj);
      var textemail = obj.value.email;
      var textpass = obj.value.password;
      var textname = obj.value.name;
      console.log(textemail, textpass);
      this.crud.myfunction("userDetails").subscribe(
        (res)=>{
          console.log(res);
          var count = 0;
          for(var key in res){
            console.log(res[key]);

            if(res[key]['email'] == textemail && res[key]['password'] == textpass){

              var obj_store = {
                uname: res[key]['name'],
                umobile: res[key]['mobile'],
                uemail: res[key]['email'],
                uid: res[key]['id']
              }

              count++;
            }
          }
          console.log(count);

          if(count>0){
            //this.loginmsg = "Login successfully";
            this.authdata.setval(textemail);
            this.authdata.setuserDetails(obj_store);
            this.ds.changemenu({status:1});
            this.router.navigate(['/']);
          }
          else{
            this.loginmsg = "Invalid";  

          }
        }
      )
  }

}
