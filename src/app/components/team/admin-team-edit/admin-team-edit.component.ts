import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITeam } from 'src/app/model/team.model';
import { TeamService } from 'src/app/service/team.service.service';

@Component({
  selector: 'app-admin-team-edit',
  templateUrl: './admin-team-edit.component.html',
  styleUrls: ['./admin-team-edit.component.css']
})
export class AdminTeamEditComponent implements OnInit {

  teamId!: number;
  team: ITeam | undefined;

  constructor(private teamService: TeamService, private route: ActivatedRoute) {
    const teamIdParam = this.route.snapshot.paramMap.get('id');

    if (teamIdParam) {
      this.teamId = +teamIdParam;
      this.teamService.getTeamDetails(this.teamId).subscribe(
        (data) => {
          this.team = data;
        },
        (error) => {
          console.error('Error obteniendo detalles del equipo', error);
        }
      );
    } else {
      console.error('No se proporcionó un ID de equipo en los parámetros de la ruta');
      // Puedes redirigir o manejar de otra manera cuando no hay un ID de equipo
    }
  }

  ngOnInit() {
  }

}
