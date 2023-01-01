import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import Swal from 'sweetalert2'

import {Router} from '@angular/router';


  
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
email:string='';
password:string='';
password2:string='';
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
signup(){
  if (this.email==''){
   // alert("you have to enter a valid email")
    Swal.fire({
      title: 'Error!',
      text: 'Validate your email ',
      icon: 'error',
      confirmButtonText: 'Okay ! '
    })
    return ;
    
      }
      if (this.password==''){
        //alert("you have to enter a valid password")
        Swal.fire({
          title: 'Error!',
          text: 'Validate your Password please  ',
          icon: 'error',
          confirmButtonText: 'Okay ! '
        })
        return ;
        
          }
          if (this.password!=this.password2){
           
            Swal.fire({
              title: 'Error!',
              text: '"Make sure you entered the same password ',
              icon: 'error',
              confirmButtonText: 'Okay ! '
            })
            return ;
          }
          this.auth.signup(this.email,this.password);
          this.email='';
          this.password='';
          this.router.navigate(['verify']);
}
}
