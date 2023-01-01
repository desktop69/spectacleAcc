import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { json, response } from 'express';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient ) { }
 
  getstudent(){

    return this._http.get<any>("http://localhost:3000/api/v1/utilisateurs/")
    .pipe(map((res:any)=>{
    
    
    return res ;
    }))
}
updatedtudent(id:number,data:any,){
    return this._http.put("http://localhost:3000/api/v1/utilisateurs/"+id,data)
    .pipe(map((res:any)=>{
      return res;

    }))



}

updateresid(id:number,data:any,){
  return this._http.put("http://localhost:3000/api/v1/utilisateurs/"+id,data)
  .pipe(map((res:any)=>{
    return res;

  }))



}


deletestudent(id:number){
return this._http.delete<any>("http://localhost:3000/api/v1/utilisateurs/"+id)
.pipe(map((res:any)=>{
  return res ;


}))

}


postestudent(data:any){
return this._http.post<any>("http://localhost:3000/api/v1/utilisateurs/",data)
.pipe(map((res:any)=>{
return res;

}))


}
get(id:number){
  return this._http.get<any>("http://localhost:3000/api/v1/utilisateurs/"+id)
  .pipe(map((res:any)=>{
    return res ;
  
  
  }))
  
  }
 
}
    

