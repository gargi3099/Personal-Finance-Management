import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Details } from 'src/models/structure.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  object1:Details={amount:0 ,desc:'',createdBy:'',timestamp:new Date()}
  result1=[]
  constructor(public memberService:MemberService,public router:Router) { 
     //alert("Host says hello!")
  }

  ngOnInit() {
    
  }

  addMember(){
    this.memberService.addData(this.object1)
    this.object1={amount:0,desc:'',createdBy:'',timestamp:new Date()}
    this.router.navigateByUrl('/home')
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

  submitCall(formData:NgForm){
    console.log(formData)
    this.memberService.addData(formData.value)
    formData.resetForm()
    this.router.navigateByUrl('/home')
  }
}
