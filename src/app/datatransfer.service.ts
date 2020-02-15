import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {

  constructor() { }


 //Creating object of subject class
  public obj_subjectClass_for_login = new Subject();
  changemenu(obj){
    //broadcast next is use for broadcast
    this.obj_subjectClass_for_login.next(obj);
  }

  public obj_subjectClass = new Subject();
  broadcastbrand(obj){
    //console.log("test");
    //console.log(obj);
    //console.log(this.obj_subjectClass);
    this.obj_subjectClass.next(obj);
  }


  public obj_subjectClass_for_cart = new Subject();
  cart_count_method(obj){
    this.obj_subjectClass_for_cart.next(obj);
  }

}
