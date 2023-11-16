import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ITeam } from 'src/app/model/team.model';

@Component({
  selector: 'app-team-view-modal',
  templateUrl: './team-view-modal.component.html',
  styleUrls: ['./team-view-modal.component.css']
})
export class TeamViewModalComponent implements OnInit {
  @Input() team: ITeam = {} as ITeam;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
