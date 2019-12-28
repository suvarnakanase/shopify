import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class Guard2Guard implements CanActivate {
  constructor(private auth:AuthService , private rou: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let ans_auth = this.auth.isLoggedIn()
    if(ans_auth){
      return true;
    }
    else{
      this.rou.navigate(['/login']);
      return false;
    }
    return true;
  }
  
}
