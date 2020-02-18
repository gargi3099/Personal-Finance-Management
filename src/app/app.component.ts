import { Component } from '@angular/core';
import { element } from 'protractor';
import { MemberService } from './member.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  regForm={enteredName:'', email:'', pswd:'', phone:''}
  result1=[]
  
  constructor(public memberService:MemberService){

  }
 /* addName(){
    this.result.push(this.regForm) 
    this.regForm={enteredName:'', email:'', pswd:'', phone:''}
    console.log(this.result)
 }

 deleteMember(member){
  this.result= this.result.filter(element=>{
    return element!=member;
  })
  console.log(this.result);
 }

 NameShow(data3){
   console.log("Name field being shown in app.component with name = ",data3);
 }

 MailShow(data4){
   console.log("Mail field being shown in app.component with mail = ",data4);
 }*/
}
