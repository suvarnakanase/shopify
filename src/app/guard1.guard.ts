import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class Guard1Guard implements CanActivate {
  constructor(private auth: AuthService , private rou: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let ans_aut = this.auth.isLoggedIn();
      if(ans_aut){
        console.log("user logged in");
        this.rou.navigate(['/']);
        return false;
      } 
      else{

        
        console.log("no user logged in");
        return true;
      }
  }
  
}
