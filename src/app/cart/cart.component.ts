import { Component, OnInit, Inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CrudServiceService } from '../crud-service.service';
import { DatatransferService } from '../datatransfer.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public proData:any;
  constructor(private crud: CrudServiceService, @Inject(CookieService) private cookieData:CookieService, private db: DatatransferService) { }

  ngOnInit() {
    let ans = this.cookieData.get("productId");
    //console.log("ans" + ans);   
    
    if(ans!=""){
      let arr = ans.split("#");
     // console.log(arr); 

      //console.log("id from cart" + ans);

      this.crud.myfunction("products").subscribe(
        (res)=>{
          //console.log(res); 
          let newarr = [];
          for(let key in res){
            if(arr.indexOf(res[key]['id'].toString() ) != -1){
              // console.log(res[key]);

              newarr.push(res[key]);
            }
          }
          
          //console.log(newarr);

          this.proData = newarr;
        }
      )
    }
  }

  delete_from_cart(id,ev){

    ev.preventDefault();
    //alert(id);
    let ans = this.cookieData.get("productId");
    //console.log(ans);
    let arr = ans.split('#');
    //console.log(arr);
    let pos = arr.indexOf(id.toString());
    //console.log(pos);


    arr.splice(pos,1);
    console.log(arr);

     let finalval = arr.join("#");
    console.log(finalval);

    


    var expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 1);
      this.cookieData.set("productId" ,finalval, expireDate);
      let count = arr.length;

      this.db.cart_count_method({total_count_cart : count});

      ev.target.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "none"
  }

}
