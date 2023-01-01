import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { AuthService } from 'src/app/shared/auth.service';
import { HomeComponent } from '../home/home.component';
import { studentdata } from '../home/studentmodel';
import { DashboardComponent } from '../dashboard/dashboard.component';
 
//import { Router } from 'express';
import { ActivatedRoute,Router } from '@angular/router';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {



 

  current: any
  formvalue!:FormGroup
  studentmodelobj : studentdata =new studentdata
  allstudentdata:any;


  constructor( private router:Router,
    private http: HttpClient ,  public auth:AuthService,private api:ApiService ,private formBuilder:FormBuilder,private route:ActivatedRoute ) { }
 
  ngOnInit(): void {


    this.formvalue=this.formBuilder.group({


      name:['',Validators.required],
      adr:['',Validators.required],
      date:['',Validators.required],
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
      console.log()
      console.log(this.studentmodelobj.noms);
      console.log(this.studentmodelobj.adresse);
      console.log(this.studentmodelobj._id);
    })

  }
 
       update(){
     this.studentmodelobj._id=this.current._id;
    
        this.studentmodelobj.noms=this.formvalue.value.name;
        this.studentmodelobj.adresse=this.formvalue.value.adr;
        this.studentmodelobj.date=this.formvalue.value.date;
        this.studentmodelobj.desc=this.formvalue.value.desc;
        this.studentmodelobj.imgadr=this.formvalue.value.imgadr;  

       this.api.updatedtudent(this.current._id,this.studentmodelobj).subscribe(res=> {console.log(res)
         this.formvalue.reset()
         Swal.fire({
          title: 'Done !',
          text: 'Show modified !  ',
          icon: 'success',
          confirmButtonText: 'Okay ! '
        })
       this.router.navigate(['dashboard'])
        })
  }
}
