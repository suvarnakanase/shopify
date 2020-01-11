import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { DatatransferService } from '../datatransfer.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myvar1:boolean = true;
  myvar2:boolean = false;
  username:string ="";
  constructor(private auth: AuthService, private ds: DatatransferService) { }

  ngOnInit() {
    let ans_auth = this.auth.isLoggedIn();
    console.log(ans_auth);

    if(ans_auth){
      this.myvar1 = false;
      this.myvar2 = true;
      this.username = this.auth.getval();
    }

    this.ds.obj_subjectClass_for_login.subscribe(
      (res)=>{
        //console.log("header");
        //console.log(res);

        if(res['status'] == 0){
          this.myvar1 = true;
          this.myvar2 = false;
        }
      }
    )
    
  }



}
