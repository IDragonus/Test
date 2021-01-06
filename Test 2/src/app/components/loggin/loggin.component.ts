import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {
  response;
  pass;
  errorLogin;

  Login = new FormGroup({
    email: new FormControl( '', [ Validators.required ] ),
    pass: new FormControl( '', [ Validators.required ] )
  });

  constructor(
    private login: LoginService,
    private router: Router,) { }

  ngOnInit() {
 
  }

 loggin() {
    this.errorLogin ='';
    let prueba = this.Login.value.pass;
 
    this.login.login(this.Login.value.pass).subscribe(
      (data) => {
        this.response = data;
        console.log('arreglo', this.response);
        this.router.navigate(["/home"]);
      },
      (error) =>{
        if(error != null){
         this.errorLogin = error;
        }
        console.log('Error:', error)
      }  
    );
  }

}
