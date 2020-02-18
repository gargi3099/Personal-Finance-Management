import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  enteredName=""
  email=""
  pswd=""
  phone=""
  result1=[]
  constructor(public memberService:MemberService) { 
     //alert("Host says hello!")
  }

  ngOnInit() {
    
  }
/*
  addName(){
    let object={name: this.enteredName, mail: this.email, password: this.pswd, pno: this.phone}
     this.result.push(object) 
     this.enteredName=""
     this.email=""
     this.pswd=""
     this.phone=""
     console.log(this.result)
    
  }*/
}
