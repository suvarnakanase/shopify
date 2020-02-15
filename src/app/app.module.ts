import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RightComponent } from './right/right.component';
import { LeftComponent } from './left/left.component';

import {RouterModule} from '@angular/router';
import {HomeSliderComponent } from './home-slider/home-slider.component';
import{HttpClientModule} from '@angular/common/http';
import {FiltercatComponent } from './filtercat/filtercat.component';
import { LogoutComponent } from './logout/logout.component';
import { PasswordComponent } from './password/password.component';
import { Guard1Guard } from './guard1.guard';
import { Guard2Guard } from './guard2.guard';

import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

const routerlink = [
  {path:'', component:HomeComponent},
  {path:'cart', component:CartComponent},
  {path:'login', component:LoginComponent, canActivate:[Guard1Guard]},
  {path:'password', component:PasswordComponent, canActivate:[Guard2Guard]},
  {path:'logout', component:LogoutComponent, canActivate:[Guard2Guard]},
 
  {path:'catwisepro/:urlCatId', component:FiltercatComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    LoginComponent,
    RightComponent,
    LeftComponent,
    HomeSliderComponent,
    FiltercatComponent,
    LogoutComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerlink),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
