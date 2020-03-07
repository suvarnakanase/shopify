import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(public httpser : HttpClient) { }
   private myurl = "http://localhost:3000/";

  myfunction(abc){
    return this.httpser.get(this.myurl + abc);
  }

  add(userRecord, keyName){
   return this.httpser.post(this.myurl+keyName, userRecord);
  }

  update(userRecord, tablename, id){
    //http://localhost:3000/userDetails/2
    return this.httpser.put(this.myurl + tablename + "/" + id, userRecord);
  }

}
