import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    
   }

   isLoggedIn(){
     let ans = localStorage.getItem("name")
     //console.log(ans);
     if(ans === null){
       return false;
     }
     else{
       return true;
     }
   }

   getval(){
     return localStorage.getItem("name");
   }

   removeval(){
     localStorage.removeItem("name");
     return false;
   }

   setval(val){
    localStorage.setItem("name", val);
   }
}
