import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Input() dataName;
  @Input() dataMail;
  constructor() {
    
   }

  ngOnInit() {
    
  }
 
  Show(){
    console.log("Name field being shown in registration.component with name = ",this.dataName);
    console.log("Mail field being shown in registration.component with mail = ",this.dataMail);
  }
  
}
