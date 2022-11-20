import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth,private router:Router) { }
login(email:string,password:string){
  this.fireauth.signInWithEmailAndPassword(email,password).then((res)=>{
localStorage.setItem('token','true');
this.router.navigate(['/home'])
  },err=>{alert("something went wrong ")
  this.router.navigate(['/login'])
})
}


signup(email:string,password:string){
  this.fireauth.createUserWithEmailAndPassword(email,password).then((res)=>{
    alert("user registred successfully")
    this.router.navigate(['/login'])


  },err=>{alert("something went wrong ")
  this.router.navigate(['/login'])

})


}
logout(){
this.fireauth.signOut().then(()=> {localStorage.removeItem('token')
this.router.navigate(['login/'])

},err=>{alert("something went wrong ")
this.router.navigate(['/login'])



})
}
}