import { Component, OnInit, Inject } from '@angular/core';
import {AuthService} from '../auth.service';
import { DatatransferService } from '../datatransfer.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myvar1:boolean = true;
  myvar2:boolean = false;
  username:string ="";
  public header_cart_count: any = 0;
  constructor(private auth: AuthService, private ds: DatatransferService, @Inject(CookieService) private cookieData:CookieService) { }

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

    
    this.ds.obj_subjectClass_for_cart.subscribe(
      (res)=>{
        console.log("Header Cart Count");
        console.log(res);
        this.header_cart_count = res['total_count_cart'];
      },
      ()=>{}
    )


    let ans_cart = this.cookieData.get("productId");
    if(ans_cart == ""){
      this.header_cart_count = 0;
    }
    else{
      console.log(ans_cart);
      let arr = ans_cart.split("#");
      this.header_cart_count = arr.length;
    }
    
  }



}
