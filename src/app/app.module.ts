import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentOneComponent } from './components/component-one/component-one.component';
import { MatCardModule } from '@angular/material/card';
import { NavComponent } from './components/nav/nav.component';
import { BannerOneComponent } from './components/banner-one/banner-one.component';
import { BannerTwoComponent } from './components/banner-two/banner-two.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { BannerThreeComponent } from './components/banner-three/banner-three.component';
import { BannerFourComponent } from './components/banner-four/banner-four.component';
import { BannerFiveComponent } from './components/banner-five/banner-five.component';



@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    NavComponent,
    BannerOneComponent,
    BannerTwoComponent,
    ContactusComponent,
    FooterComponent,
    BannerThreeComponent,
    BannerFourComponent,
    BannerFiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
