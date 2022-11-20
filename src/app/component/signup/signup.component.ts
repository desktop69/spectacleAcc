import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
email:string='';
password:string='';
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
signup(){
  if (this.email==''){
    alert("you have to enter a valid email")
    return ;
    
      }
      if (this.password==''){
        alert("you have to enter a valid password")
        return ;
        
          }
          this.auth.signup(this.email,this.password);
          this.email='';
          this.password='';
}
}
