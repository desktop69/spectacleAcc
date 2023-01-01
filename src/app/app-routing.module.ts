import { NgModule } from '@angular/core';
import { SignInMethod } from '@angular/fire/auth';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/add/add.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EditComponent } from './component/edit/edit.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ShowClientComponent } from './component/show-client/show-client.component';
import { ShowComponent } from './component/show/show.component';
import { SignupComponent } from './component/signup/signup.component';
import { VerifyemailComponent } from './component/verifyemail/verifyemail.component';


const routes: Routes = [
 {path:'',redirectTo:'home',pathMatch:'full'},
 {path: 'profile',component:ProfileComponent},
 {path: 'login',component:LoginComponent},
 {path: 'home',component:HomeComponent},
 {path:'signup',component:SignupComponent},
 {path:'verify',component:VerifyemailComponent},
 {path:'forgot',component:ForgotpasswordComponent},
 {path:'dashboard',component:DashboardComponent},
 {path:'add',component:AddComponent},
 {path:'edit/:id',component:EditComponent},
 {path:'show/:id',component:ShowComponent},
 {path:'showClient/:id',component:ShowClientComponent}

 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}