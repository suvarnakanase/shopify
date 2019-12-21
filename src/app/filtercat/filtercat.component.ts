import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CrudServiceService} from '../crud-service.service';
@Component({
  selector: 'app-filtercat',
  templateUrl: './filtercat.component.html',
  styleUrls: ['./filtercat.component.css']
})
export class FiltercatComponent implements OnInit {

  constructor(private act :ActivatedRoute, private crud : CrudServiceService ) { }
  public proData:any;
  ngOnInit() {
    //console.log(this.act);
    //console.log(this.act.snapshot.params);
 
    var catid = this.act.snapshot.params.urlCatId;
    console.log(catid);

    this.crud.myfunction("products").subscribe(
      (res)=>{
        console.log(res);
        var newarr =[];
        for(var indexNumber in res){
          //console.log(indexNumber);
          //console.log(res[indexNumber])
          if(catid == res[indexNumber].pcait){
            console.log("condition");
            console.log(res[indexNumber]);
            newarr.push(res[indexNumber]);
            //var arrlenght = newarr.length; // just for t
           
          }
        }
        console.log(newarr);
        this.proData = newarr;
      },
      (err)=>{
        console.log(err)
      }
    )
  }

}
