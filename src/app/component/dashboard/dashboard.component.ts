import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { AuthService } from 'src/app/shared/auth.service';
import { HomeComponent } from '../home/home.component';
import { studentdata } from '../home/studentmodel';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import Swal from 'sweetalert2';
 

 


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 current :any;
  studentmodelobj : studentdata =new studentdata
  allstudentdata:any;
  constructor(private http: HttpClient ,  public auth:AuthService,private api:ApiService ,private router:Router ,private formBuilder:FormBuilder   ) { }

  ngOnInit(): void {
  this.getdata();
    
  }
  getdata(){ 
    
    
    
    this.api.getstudent().subscribe(res=>{


      this.allstudentdata=res;
    })

    

     
}
del(data:any){

this.api.deletestudent(data._id)
.subscribe(res=>{
  Swal.fire({
    title: 'Done !',
    text: 'Show deleted !  ',
    icon: 'success',
    confirmButtonText: 'Okay ! '
  })
  this.getdata();

  
})

}
  getuser(data:any):void{

    this.api.get(data._id).subscribe(res=>{

      this.current=res;
      console.log(res);
    })

  }




}
