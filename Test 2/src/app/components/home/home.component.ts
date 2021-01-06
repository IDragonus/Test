import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Router, ActivatedRoute } from "@angular/router";
import {
  MatTableDataSource,
  MatPaginator,
  MatSort,
  MatDialog,
  MatSnackBar
} from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

response;
  //response = new MatTableDataSource();
  dataSource = new MatTableDataSource();
  constructor(   private user: HomeService,
    private router: Router) { }

  ngOnInit() {
    this.getUser();
  }

   getUser() {
    //this.errorLogin ='';
   // let prueba = this.Login.value.pass;
 
    this.user.getUser().subscribe(
      (data) => {
        this.response = data;
        console.log('arreglo', this.response);
        //this.router.navigate(["/home"]);
      },
      (error) =>{
        if(error != null){
         //this.errorLogin = error;
        }
        console.log('Error:', error)
      }  
    );
  }

  salir(){
    this.router.navigate(["/login"]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.response.filter = filterValue.trim().toLowerCase();
  }

}
