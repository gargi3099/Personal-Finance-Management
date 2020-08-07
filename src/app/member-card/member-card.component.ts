import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { Details } from 'src/models/structure.model';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input('member') data;
  editObject:Details={amount:0,desc:'',createdBy:'',timestamp:new Date()}
  isformvisible=false;
  @Output('onDelete') onDeleted = new EventEmitter() ;
  @Output() clkName = new EventEmitter();
  @Output() clkMail = new EventEmitter(); 
  
  constructor(public memberService:MemberService , public router:Router) { }

  ngOnInit() {
  }

  delete(){
    this.memberService.deleteData(this.data)
  }

  onUpdateClicked(){
    this.editObject.amount=this.data.amount;
    this.editObject.desc=this.data.desc;
    this.editObject.createdBy=this.data.createdBy;
    this.editObject.timestamp=new Date();
    this.isformvisible=!this.isformvisible;
  }

  update(){
    this.memberService.updateData(this.data.id,this.editObject);
    this.isformvisible=false;
  }

  sendToMemberDetails(){
     this.router.navigate(['/home/members/',this.data.id,'Gargi'])
  }
/*
  printName(data1){
    this.clkName.emit(data1);
  }

  printMail(data2){
    this.clkMail.emit(data2);
  }*/
}
