import { Component, OnInit } from '@angular/core';
import {CrudServiceService} from '../crud-service.service';
import { DatatransferService } from '../datatransfer.service';
@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  public proData:any;
  constructor(private serData:CrudServiceService, private db : DatatransferService ) { }

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

}
