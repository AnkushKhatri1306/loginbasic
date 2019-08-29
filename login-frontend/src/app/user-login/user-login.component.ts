import { Component, OnInit } from '@angular/core';
import {UserServiceService } from "../__service/user-service.service";
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
    user:any = {};

  constructor(private us: UserServiceService, private router: Router) { }

  ngOnInit() {

  }

  userlogin(){
    this.us.login(this.user).subscribe(resp => {
      console.log(resp);
      
      if(resp.access){
        console.log('Login successfully');
        localStorage.clear();
        localStorage.setItem('token', resp.access);
        this.router.navigate(['home']);        
      }
    },
    error => {

    });
  }

}
