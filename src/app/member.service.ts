import { Injectable } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  calc:number=0
  object:{amount:number,desc:string}={amount:0 ,desc:''}
  result=[]
  constructor(public db:AngularFirestore) { 
    this.getAppMembers();
  }

  addData()
  {
    this.result.push(this.object);
    this.calc=+this.calc + +this.object.amount;
    this.object={amount:0,desc:''}
    console.log(this.result)
  }
  deleteData(member)
  {this.result= this.result.filter(element=>{
    return element!=member;
  })
  this.calc=+this.calc - +member.amount;
  console.log(this.result);
  }
  getAppMembers(){
    this.db.collection("members").valueChanges().subscribe(res=>{
      console.log(res)
    })
  }
}
