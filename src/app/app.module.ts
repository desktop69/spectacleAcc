
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { VerifyemailComponent } from './component/verifyemail/verifyemail.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';

import {HttpClientModule} from '@angular/common/http';

import { AuthService } from 'src/app/shared/auth.service';
import { ProfileComponent } from './component/profile/profile.component';
import { AddComponent } from './component/add/add.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './component/edit/edit.component';
import { ShowComponent } from './component/show/show.component';
import { ShowClientComponent } from './component/show-client/show-client.component';

 
const material = [
MatButtonModule,
MatToolbarModule,
MatButtonModule,
MatIconModule    , 
MatFormFieldModule,
MatInputModule

 




];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    VerifyemailComponent,
    ForgotpasswordComponent,
    ProfileComponent,
    AddComponent,
    DashboardComponent,
    EditComponent,
    ShowComponent,
    ShowClientComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
     material,
    RouterModule, 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule. initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    
  

  ],
  exports:[material],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
