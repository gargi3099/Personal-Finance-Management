import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email=""
  password=""
  constructor(public auth:AuthService,public router:Router) { 
    
  }

  ngOnInit() {
  }

  signIn(signInData:NgForm){
    let status=false;
    status=this.auth.SignIn(signInData.value.email,signInData.value.password)
    if(status==true){
      this.router.navigateByUrl('/home')
    }
  }

}
