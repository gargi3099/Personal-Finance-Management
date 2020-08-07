import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../member.service';
import { Details } from 'src/models/structure.model';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  id=""
  name=""
  member:any={amount:0,desc:'',createdBy:'',timestamp:new Date()}
  constructor(public route:ActivatedRoute,public memberService:MemberService) { }

  ngOnInit() {
      this.route.params.subscribe(res=>{
      this.id=res['id']
      this.name=res['name']
      console.log(res)
      this.memberService.getMemberById(this.id).subscribe(res=>{
        this.member=res
      })
    })
  }

}
