import { Component, OnInit } from '@angular/core';
import {CrudServiceService} from '../crud-service.service';
@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  public catData:any;
  public brandData:any;
  constructor(public myserv1 :CrudServiceService) {}

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

}
