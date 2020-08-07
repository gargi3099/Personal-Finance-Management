import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  calc:number=0
  constructor(public memberService : MemberService) { }

  ngOnInit() {
  let total=0;
  for(var i=0;i<this.memberService.result.length;i++){
    if(this.memberService.result[i].amount){
      total=+total + +this.memberService.result[i].amount
      this.calc=total
    }
  }
  }

}
