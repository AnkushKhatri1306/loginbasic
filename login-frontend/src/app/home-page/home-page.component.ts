import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "../__service/user-service.service";
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userData:any;

  constructor(private us: UserServiceService, private router: Router) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData(){
      var token = localStorage.getItem('token')
      this.us.getUserDetail(token).subscribe(resp => {
          if(resp.status == 'success'){
              console.log('data', resp.data);              
              this.userData = resp.data;
          }
      },
      error => {

      })
  }

  logoutUser(){
    localStorage.clear()
    this.router.navigate(['login']);
  }

}
