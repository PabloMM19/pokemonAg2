import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-trainer-login-unrouted',
  templateUrl: './trainer-login-unrouted.component.html',
  styleUrls: ['./trainer-login-unrouted.component.css']
})
export class TrainerLoginUnroutedComponent implements OnInit {
  login: FormGroup
  constructor() {
    this.login = new FormGroup({})
    this.username = "user"
    this.password = "pass"
   }
  ngOnInit() {
  }

  username: string;
  password: string;

  onSubmit() {
    console.log("onSubmit() called")
  }
  

}
