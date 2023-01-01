import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from 'src/app/shared/api.service';
import { AuthService } from 'src/app/shared/auth.service';
import Swal from 'sweetalert2';
import { HomeComponent } from '../home/home.component';
import { studentdata } from '../home/studentmodel';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formvalue!:FormGroup
  studentmodelobj : studentdata =new studentdata
  allstudentdata:any;
  constructor(private http: HttpClient ,  public auth:AuthService,private api:ApiService ,private formBuilder:FormBuilder
     ,private router:Router
     ) { }
 
 
  ngOnInit(): void {
    this.formvalue=this.formBuilder.group({


      name:['',Validators.required,],
      address:['',Validators.required],
      date:['',Validators.required],
      resId:['',Validators.required],
      desc:['',Validators.required],
      imgadr:['',Validators.required],

       

    })
  }

  addstudent(){

    
  this.studentmodelobj.noms=this.formvalue.value.name;
  this.studentmodelobj.adresse=this.formvalue.value.address;
  this.studentmodelobj.date=this.formvalue.value.date;
  this.studentmodelobj.resId=this.formvalue.value.resId;
  this.studentmodelobj.desc=this.formvalue.value.desc;  
  this.studentmodelobj.imgadr=this.formvalue.value.imgadr;  

  
     if(  this.studentmodelobj.noms=='' ||this.studentmodelobj.adresse =='' ||  this.studentmodelobj.date==''){
      alert('nn');
     }
    else {    this.api.postestudent(this.studentmodelobj).subscribe(res=>{ Swal.fire({
      title: 'Done !',
      text: 'Show modified !  ',
      icon: 'success',
      confirmButtonText: 'Okay ! '
    })},err=>{ Swal.fire({
      title: 'OOpsie  !',
      text: 'Erreur  ',
      icon: 'success',
      confirmButtonText: 'Okay ! '
    })})
    
  this.router.navigate(['dashboard'])
  }

   }
}
