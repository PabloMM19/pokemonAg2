import { Component, OnInit } from '@angular/core';

import { ITeam, ITeamData } from 'src/app/model/team.model';
import { TeamService } from 'src/app/service/team.service.service';


@Component({
  selector: 'app-admin-team-view-routed',
  templateUrl: './admin-team-view-routed.component.html',
  styleUrls: ['./admin-team-view-routed.component.css']
})
export class AdminTeamViewRoutedComponent implements OnInit {
  teamData: ITeam[] = [];

  constructor(private dataService: TeamService) {}

  ngOnInit(): void {
    this.dataService.getPokemonData().subscribe((data: ITeamData) => {
      this.teamData = data.content;
      console.log(data); // Imprime los datos en la consola para verificar
    });
  }
}
