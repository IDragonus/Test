import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import {
  MatTableDataSource,
  MatPaginator,
  MatSort,
  MatDialog,
  MatSnackBar
} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  clients = new MatTableDataSource();
  dataSource = new MatTableDataSource();

  constructor(private http: HttpClient) { }

  login(pass): Observable<object> {

    console.log('a ver',pass)
    let headers = new HttpHeaders({
      'App': 'APP_BCK',
      'Accept':'application/json',
      'Password': pass,
    });

    return this.http.put('https://dev.tuten.cl/TutenREST/rest/user/testapis%40tuten.cl',null,{ headers});
  }
}
