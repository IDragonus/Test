import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<object> {
    console.log('a gett')
    let headers = new HttpHeaders({
      'App': 'APP_BCK',
      'Accept':'application/json',
      'Adminemail': 'testapis@tuten.cl',
      'Email': 'contacto@tuten.cl',
      'Token':'testapis@tuten.clcaup25ib6s4a2ismfdsr0t5vrj'
    });

    return this.http.get('https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true',{headers});
  }
}
