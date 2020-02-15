import { Component, OnInit, Inject } from '@angular/core';
import {CrudServiceService} from '../crud-service.service';
import { DatatransferService } from '../datatransfer.service';
import { CookieService } from 'ngx-cookie-service';
import { inject } from '@angular/core/testing';



@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  public proData:any;
  constructor(private serData:CrudServiceService, private db : DatatransferService , @Inject(CookieService) private cookieData:CookieService) { }

  ngOnInit() {
    this.serData.myfunction("products").subscribe(
      (res)=>{
        console.log(res);
        this.proData = res;
      },
      (err)=>{
        console.log(err);
      }
    )

    this.db.obj_subjectClass.subscribe(
      (response)=>{
        //console.log("data emmited from left component");
        //console.log(response);
        this.serData.myfunction("products").subscribe(
          (res)=>{
            //console.log(res);

            var myarr = [];
            for(let key in res){
              //console.log(res[key]);
              if(res[key]['pbrid'] == response['brandId']){
                myarr.push(res[key]);
              }

              console.log(myarr);
              this.proData = myarr;

            }
          }
        )
      }
    )
  }

  add_to_cart(id, ev){
    ev.preventDefault();
    //alert(id);
    let ans = this.cookieData.get("productId");
   
    if(ans == ""){
      //first product
      console.log("First Product" , ans);
      var expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 1);
      this.cookieData.set("productId" ,id, expireDate);
      console.log("product ADDED IN cart");
      var count = 1;
     
    }
    else{
        //console.log("added by user" , id, typeof(id));
        //console.log("second product onward");
        //console.log(ans);

        let arr = ans.split("#");
        console.log(arr);

        let position = arr.indexOf(id.toString());

        if(position == -1){
          arr.push(id);
          console.log(arr)
          console.log("product updated");

          let newval = arr.join("#")
          console.log(newval);
          var expireDate = new Date();
          expireDate.setDate(expireDate.getDate() + 1);
          this.cookieData.set("productId" ,newval, expireDate);
          count = arr.length;
        }
        else{
          console.log("product exist");
          count = arr.length;
          alert("product exist")
        }

        
    }

    this.db.cart_count_method({total_count_cart : count})
  }


}
