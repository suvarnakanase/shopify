import { Component, OnInit } from '@angular/core';
import {CrudServiceService} from '../crud-service.service';
@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  public proData:any;
  constructor(private serData:CrudServiceService ) { }

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
  }

}
