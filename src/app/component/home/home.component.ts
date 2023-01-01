import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { HttpClient } from '@angular/common/http';
import { studentdata } from './studentmodel';
import { ApiService } from 'src/app/shared/api.service';
import { Spectacle } from 'src/app/model/Spectacle.model';
import { SpectacleService } from 'src/app/services/spectacle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css' ]
})
export class HomeComponent implements OnInit {
studentmodelobj : studentdata =new studentdata ;
allstudentdata:any;
spectacles? : Spectacle[];
  constructor(private http: HttpClient ,  public auth:AuthService,private api:ApiService , private specServices :SpectacleService    ) { }

 
  getdata(){   
    this.api.getstudent().subscribe(res=>{
      this.allstudentdata=res;
    })  
}

chargerSpectacles (){
  this.specServices.LiterSpectacle().subscribe(spec => {
    console.log(spec);
    this.spectacles = spec;
  })
}

ngOnInit(): void {
  this.getdata()
  this.chargerSpectacles();
  
}

reserver(id:any){
  

}
}