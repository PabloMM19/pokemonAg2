import { Component, Input, OnInit } from '@angular/core';
import { ITeam } from 'src/app/model/team.model';
import { TeamViewModalComponent } from '../team-view-modal/team-view-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-team-view-unrouted',
  templateUrl: './admin-team-view-unrouted.component.html',
  styleUrls: ['./admin-team-view-unrouted.component.css']
})
export class AdminTeamViewUnroutedComponent implements OnInit {
  @Input() teamData: ITeam[] = [];
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  verEquipos(team: ITeam): void {
    const modalRef = this.modalService.open(TeamViewModalComponent, { size: 'lg' });
    modalRef.componentInstance.team = team;
  }
}
