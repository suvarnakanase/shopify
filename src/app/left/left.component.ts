import { Component, OnInit } from '@angular/core';
import {CrudServiceService} from '../crud-service.service';
import { DatatransferService } from '../datatransfer.service';
@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  public catData:any;
  public brandData:any;
  constructor(public myserv1 :CrudServiceService, private ds: DatatransferService) {}

  ngOnInit() {
    this.myserv1.myfunction("category").subscribe(
      (res)=>{

        console.log(res);
        this.catData = res;
      },//response
      (err)=>{console.log(err)}//error
    )

    this.myserv1.myfunction("brand").subscribe(
      (res)=>{
        this.brandData = res;
        console.log(res)
      },//response
      (err)=>{console.log(err)}//error
    )
  }

  filter_brand(id, ev){
    ev.preventDefault();
   // alert(id);
    //this.ds.broadcastbrand({})
    this.ds.broadcastbrand({brandId:id});
  }

}
