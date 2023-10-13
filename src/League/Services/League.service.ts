import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

constructor(private http:HttpClient) { }
postData(leagueVM: any,endPoint:any): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.post<any>(`${environment.apiUrl}${endPoint}`,leagueVM,httpOptions);
}
DeletData(Id:Number,endPoint:any):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.delete<any>(`${environment.apiUrl}${endPoint}${Id}`);
}
GetAll(group:Number,endPoint:any):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.get<any>(`${environment.apiUrl}${endPoint}${group}`,httpOptions);
}
GetLeague(Id:Number,endPoint:any):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.get<any>(`${environment.apiUrl}${endPoint}${Id}`,httpOptions);
}
putData(userData: any,Id:Number,endPoint:any): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.put<any>(`${environment.apiUrl}${endPoint}${Id}`, userData, httpOptions);
}

}
