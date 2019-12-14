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
}
