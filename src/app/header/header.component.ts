import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myvar1:boolean = true;
  myvar2:boolean = false;
  username:string ="";
  constructor(private auth: AuthService) { }

  ngOnInit() {
    let ans_auth = this.auth.isLoggedIn();
    console.log(ans_auth);

    if(ans_auth){
      this.myvar1 = false;
      this.myvar2 = true;
      this.username = this.auth.getval();
    }
  }

}
