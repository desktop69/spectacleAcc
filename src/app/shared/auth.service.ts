import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Router} from '@angular/router';
import { User } from './user';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(private fireauth:AngularFireAuth,private router:Router) { this.fireauth.authState.subscribe((user) => {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    if (user) {
      this.userData = user;
      localStorage.setItem('user', JSON.stringify(this.userData));
      JSON.parse(localStorage.getItem('user')!);
    } else {
      localStorage.setItem('user', 'null');
      JSON.parse(localStorage.getItem('user')!);
    }
  }); }


  login(email: string, password: string) {
    return this.fireauth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
     //   this.(res.user);
        this.fireauth.authState.subscribe((user) => {
          if (this.isVerified==false) {
            this.router.navigate(['verify']);
          }
          else{
            this.router.navigate(['home'])
          }
        });
      })
      .catch((err) => {
        Swal.fire({
          title: 'Error!',
          text:  err.message,
          icon: 'error',
          confirmButtonText: 'Okay ! '
        })
        return ;
      //  window.alert(err.message);
      });
  }


signup(email:string,password:string){
  this.fireauth.createUserWithEmailAndPassword(email,password).then((res)=>{
  //  alert("user registred successfully")
  Swal.fire({
    title: 'Good Job!',
    text: 'You just Signed Up !  ',
    icon: 'success',
    confirmButtonText: 'Okay ! '
  })
  return ;  
  this.router.navigate(['/login'])


  },err=>{
    Swal.fire({
      title: 'Error!',
      text: '"Make sure you entered the same password ',
      icon: 'error',
      confirmButtonText: 'Okay ! '
    })
    return ;
    //alert("something went wrong ")
 // this.router.navigate(['/login'])

})


}
logout(){

 
this.fireauth.signOut().then(()=> {localStorage.removeItem('user')
this.router.navigate(['login/'])

},err=>{ Swal.fire({
  title: 'Error!',
  text: '"Something went wrong ',
  icon: 'error',
  confirmButtonText: 'Okay ! '
})
return ;
this.router.navigate(['/login'])



})
}

get isLoggedIn(): boolean {
  const user = JSON.parse(localStorage.getItem('user')!);
  return user !== null !== false ? true : false;
}

get isVerified(): boolean {
  const user = JSON.parse(localStorage.getItem('user')!);
  return user.emailVerified !== false ? true : false;
}
get isLoggedandVerified(): boolean {
  const user = JSON.parse(localStorage.getItem('user')!);
  return user !== null && user.emailVerified !== false ? true : false;
}

SendVerificationMail() {
  return this.fireauth.currentUser
    .then((u: any) => u.sendEmailVerification())
    .then(() => {
      this.router.navigate(['verifyemail']);
    });
}

ForgotPassword(passwordResetEmail: string) {
  return this.fireauth
    .sendPasswordResetEmail(passwordResetEmail)
    .then(() => {

      
 Swal.fire({
  title: 'Good Job!',
  text: 'check your email for the reset link !  ',
  icon: 'success',
  confirmButtonText: 'Okay ! '
})
return ; 
     // window.alert('Password reset email sent, check your inbox.');
    })
    .catch((error) => {
      Swal.fire({
        title: 'Error!',
        text: '"Make sure you entered a correct mail !  ',
        icon: 'error',
        confirmButtonText: 'Okay ! '
      })
      return ;

    });
}

 
}