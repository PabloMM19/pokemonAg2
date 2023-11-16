import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-trainer-new',
  templateUrl: './admin-trainer-new.component.html',
  styleUrls: ['./admin-trainer-new.component.css']
})
export class AdminTrainerNewComponent implements OnInit {
  isCreating: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
