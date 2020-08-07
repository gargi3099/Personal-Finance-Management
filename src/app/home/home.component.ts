import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'firstproject';
  regForm={enteredName:'', email:'', pswd:'', phone:''}
  result1=[]
  constructor(public memberService:MemberService) { }

  ngOnInit() {
  }

}
