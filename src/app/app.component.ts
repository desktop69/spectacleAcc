import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { json, response } from 'express';
import { AuthService } from 'src/app/shared/auth.service';
import {Router} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient ,  public auth:AuthService,private router:Router){

  
  }
  logout(){
    
 
    this.auth.logout() 
   
      this.router.navigate(['login']);
    
  }
 
  
    






}
