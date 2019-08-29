import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://127.0.0.1:9004";

  signup(data:any){
    return this.http.post<any>(this.baseUrl + '/user/signup/', data, {
      headers : new HttpHeaders().append('Authorization', 'Ankush')
    }).pipe(map((resp) => {
        return resp;
    }))
  }

  login(data:any){
    return this.http.post<any>(this.baseUrl + '/token/', data, {
      headers: new HttpHeaders().append('Authorization', 'Ankush')
    }).pipe(map((resp) => {
        return resp;
    }))
  }

  getUserDetail(token:any){
    return this.http.get<any>(this.baseUrl + '/user/get-detail/', {
      headers: new HttpHeaders().append('Authorization', "Bearer " + token),
    }).pipe(map((resp) => {
        return resp;
    }))
  }

}
