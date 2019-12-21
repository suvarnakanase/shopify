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

const routerlink = [
  {path:'', component:HomeComponent},
  {path:'cart', component:CartComponent},
  {path:'login', component:LoginComponent},
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
    FiltercatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerlink),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
