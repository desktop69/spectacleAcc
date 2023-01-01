import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Spectacle } from '../model/Spectacle.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SpectacleService {
  specacles: Spectacle[];
  spectacle!: Spectacle;
  apiURL: string = 'http://localhost:8090/Spectacle/api';
  constructor(private http: HttpClient) {
    this.specacles = [];
  }

  LiterSpectacle(): Observable<Spectacle[]> {
    return this.http.get<Spectacle[]>(this.apiURL);
  }

  ajouterSpectacle(spec: Spectacle): Observable<Spectacle> {
    return this.http.post<Spectacle>(this.apiURL, spec, httpOptions);
  }

  supprimerSpectacle(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterSpectacle(id: number): Observable<Spectacle> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Spectacle>(url);
  }

  updateSpectacle(spec: Spectacle): Observable<Spectacle> {
    return this.http.put<Spectacle>(this.apiURL, spec, httpOptions);
  }


}
