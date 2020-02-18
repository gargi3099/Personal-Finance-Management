import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-member-child',
  templateUrl: './member-child.component.html',
  styleUrls: ['./member-child.component.css']
})
export class MemberChildComponent implements OnInit {
  @Input() enteredName; 
  @Input() email;
  @Output() clickName=new EventEmitter();
  @Output() clickMail=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  name(){
    this.clickName.emit(this.enteredName);
  }
  mail(){
    this.clickMail.emit(this.email);
  }
}
