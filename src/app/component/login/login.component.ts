import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { HomeComponent } from '../home/home.component';
import {Router} from '@angular/router';
import Swal from 'sweetalert2'





 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 
 
export class LoginComponent implements OnInit {
email:string='';
password:string='';

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
login(){
  if (this.email==''){
    Swal.fire({
      title: 'Error!',
      text: 'you have to enter a valid password or email ',
      icon: 'error',
      confirmButtonText: 'Okay ! '
    })
//alert("you have to enter a valid email")
return ;

  }
  if (this.password==''){
   // alert("you have to enter a valid password")
    Swal.fire({
      title: 'Error!',
      text: 'you have to enter a valid password or email',
      icon: 'error',
      confirmButtonText: 'Okay ! '
    })
 
    return ;
    
      }
      
      this.auth.login(this.email,this.password);
      this.email='';
      this.password='';

      
      if (this.auth.isVerified)
      this.router.navigate(['home']);
      else {
        this.router.navigate(['verifyemail']);
      }
     

}
}
