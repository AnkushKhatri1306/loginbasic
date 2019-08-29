import { Component, OnInit } from '@angular/core';
import {UserServiceService } from "../__service/user-service.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:any = {};


  constructor(private us: UserServiceService, private router: Router) { }

  ngOnInit() {
  }

  userSignUp(){
    this.us.signup(this.user).subscribe(resp => {
      if(resp.status == 'success'){
        console.log('User save successfully');
        this.router.navigate(['login']);        
      }
    },
    error => {

    });

  }
}
