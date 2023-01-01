import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { AuthService } from 'src/app/shared/auth.service';
import { HomeComponent } from '../home/home.component';
import { studentdata } from '../home/studentmodel';
import { DashboardComponent } from '../dashboard/dashboard.component';
 
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';
import {User} from "../../shared/user"
import Swal from 'sweetalert2';
@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.css']
})
export class ShowClientComponent implements OnInit {
  user:any
  x:any
  current: any
  formvalue!:FormGroup
  studentmodelobj : studentdata =new studentdata
 
  allstudentdata:any;


  constructor(   
    private http: HttpClient ,  public auth:AuthService,private api:ApiService ,private formBuilder:FormBuilder,private route:ActivatedRoute ) { }
 
  ngOnInit(): void {


    this.formvalue=this.formBuilder.group({


      name:['',Validators.required,],
      adr:['',Validators.required],
      date:['',Validators.required],
      resid:['',Validators.required],
      desc:['',Validators.required],
      imgadr:['',Validators.required],

      


    })

    this.getuser(this.route.snapshot.paramMap.get('id'));
   
    
    
    
    

    
   
 
  }

 

  getuser(id:any):void{

    this.api.get(id).subscribe(res=>{

      this.current=res;
      console.log(res);
      console.log( this.current.noms);

      console.log( this.current._id);
      console.log( this.current.adresse);
      console.log( this.current.date);
      console.log( this.current.resId);
      console.log( this.current.imgadr);
      console.log('uwu')
      this.x=this.current.imgadr;
  
    })

  }
 
       


  res(x:any){
    this.user= this.auth.userData as User;
    this.user.showsid=this.current._id;
    this.user.show=this.current.noms;

    
     
    this.studentmodelobj.noms=this.current.noms;
    this.studentmodelobj.adresse=this.current.adresse;
    this.studentmodelobj.date=this.current.date;
    this.studentmodelobj.desc=this.current.desc;
    this.studentmodelobj.imgadr=this.current.imgadr;
 

    
    this.studentmodelobj.resId=this.current.resId+'/'+x;

    this.api.updateresid(this.current._id,this.studentmodelobj).subscribe(res=>{console.log(res)})
    Swal.fire({
      title: 'Success!',
      text: 'you have booked this show ! ',
      icon: 'success',
      confirmButtonText: 'Okay ! '
    })


  }
}

