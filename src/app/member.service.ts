import { Injectable } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Details } from 'src/models/structure.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  object:Details={amount:0 ,desc:'',createdBy:'',timestamp:new Date()}
  result=[]
  constructor(public db:AngularFirestore,public router:Router,public auth:AuthService) { 
    this.getAppMembers();
  }

  addData(member)
  {/*
    this.result.push(this.object);
    this.calc=+this.calc + +this.object.amount;
    this.object={amount:0,desc:''}
    console.log(this.result)*/
    let tempMember:{amount:number,desc:string,createdBy:string,timestamp:Date}=member
    tempMember.amount=member.amount
    tempMember.desc=member.desc
    tempMember.createdBy=this.auth.getUserId()
    tempMember.timestamp=new Date()
    this.db.collection("members").add(tempMember) 
    
  }

  deleteData(member)
  { /*this.result= this.result.filter(element=>{
      return element!=member;
    })
    this.calc=+this.calc - +member.amount;
    console.log(this.result);*/
    this.db.collection("members").doc(member.id).delete();
  }

  updateData(id,data){
    this.db.collection("members").doc(id).set(data);
  
  }

  getAppMembers(){
    this.db.collection("members",ref=>ref.where('createdBy','==',this.auth.getUserId()).orderBy('amount','asc'))
    .snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe(res=>{
      this.result=res
      console.log(res)
    })
    
  }

  getMemberById(id){
    return this.db.collection("members").doc(id).valueChanges()
  }
}
