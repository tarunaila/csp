import { BcomComponent } from './bcom/bcom.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MpcComponent } from './mpc/mpc.component';
import { HeaderComponent } from './header/header.component';
import { BipcComponent } from './bipc/bipc.component';
import { ArtsComponent } from './arts/arts.component';
import { CommerceComponent } from './commerce/commerce.component';
import { BtechComponent } from './btech/btech.component';
import { BarchComponent } from './barch/barch.component';
import { BscComponent } from './bsc/bsc.component';
import { MbbsComponent } from './mbbs/mbbs.component';
import { BdsComponent } from './bds/bds.component';
import { BpharmComponent } from './bpharm/bpharm.component';
import { BscnursingComponent } from './bscnursing/bscnursing.component';
import { BbaComponent } from './bba/bba.component';
import { LlbComponent } from './llb/llb.component';
import { BedComponent } from './bed/bed.component';
import { BhmComponent } from './bhm/bhm.component';
import { BcaComponent } from './bca/bca.component';
import { CaComponent } from './ca/ca.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const appRoute: Routes = [
  {path:'',component:HomeComponent},
  {path:'mpc',component:MpcComponent},
  {path:'bipc',component:BipcComponent},
  {path:'arts',component:ArtsComponent},
  {path:'commerce',component:CommerceComponent},
  {path:'mpc/btech',component:BtechComponent},
  {path:'mpc/barch',component:BarchComponent},
  {path:'mpc/bsc',component:BscComponent},
  {path:'bipc/mbbs',component:MbbsComponent},
  {path:'bipc/bds',component:BdsComponent},
  {path:'bipc/bpharm',component:BpharmComponent},
  {path:'bipc/bscnursing',component:BscnursingComponent},
  {path:'arts/bba',component:BbaComponent},
  {path:'arts/llb',component:LlbComponent},
  {path:'arts/bed',component:BedComponent},
  {path:'arts/bhm',component:BhmComponent},
  {path:'commerce/bcom',component:BcomComponent},
  {path:'commerce/bca',component:BcaComponent},
  {path:'commerce/ca',component:CaComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MpcComponent,
    HeaderComponent,
    BipcComponent,
    ArtsComponent,
    CommerceComponent,
    BtechComponent,
    BarchComponent,
    BscComponent,
    MbbsComponent,
    BdsComponent,
    BpharmComponent,
    BscnursingComponent,
    BbaComponent,
    LlbComponent,
    BedComponent,
    BhmComponent,
    BcomComponent,
    BcaComponent,
    CaComponent,
    LoginComponent,
    SignupComponent,
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
