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

//Defing Routes
const routes:Routes =[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'news',component:NewsComponent},
  {path:'services',component:ServicesComponent},
  {path:'about-us',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'home',component:HomeComponent},
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
    // DashboardComponent

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
