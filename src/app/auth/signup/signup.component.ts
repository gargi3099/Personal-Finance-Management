import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email=""
  password=""
  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  signUp(signUpData:NgForm){
    this.auth.SignUp(signUpData.value.email,signUpData.value.password)
  }
}
