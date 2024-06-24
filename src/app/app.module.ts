import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ServicesComponent } from './services/services.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { NewsComponent } from './news/news.component';
import { NewsdetailComponent } from './news/newsdetail/newsdetail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { DriverEditProfileComponent } from './driver-edit-profile/driver-edit-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { DbheaderComponent } from './dbheader/dbheader.component';
import { DbnavComponent } from './dbnav/dbnav.component';
import { DbcontentComponent } from './dbcontent/dbcontent.component';

//Defing Routes
const routes:Routes =[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'news',component:NewsComponent},
  {path:'services',component:ServicesComponent},
  {path:'about-us',component:AboutusComponent},
  {path:'news/newsdetail/:id',component:NewsdetailComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'profile',component:DriverProfileComponent},
  {path:'edit-profile',component:DriverEditProfileComponent},
  {path:'**',component:NotfoundComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ServicesComponent,
    NewsComponent,
    NewsdetailComponent,
    NotfoundComponent,
    AboutusComponent,
    DriverProfileComponent,
    DriverEditProfileComponent,
    DashboardComponent,
    GooglemapComponent,
    DbheaderComponent,
    DbnavComponent,
    DbcontentComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideCharts(withDefaultRegisterables())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
