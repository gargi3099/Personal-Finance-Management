import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  @Input('member') data;
  @Output('onDelete') onDeleted = new EventEmitter() ;
  @Output() clkName = new EventEmitter();
  @Output() clkMail = new EventEmitter(); 
  
  constructor(public memberService:MemberService) { }

  ngOnInit() {
  }

  delete(){
    this.memberService.deleteData(this.data)
  }
/*
  printName(data1){
    this.clkName.emit(data1);
  }

  printMail(data2){
    this.clkMail.emit(data2);
  }*/
}
