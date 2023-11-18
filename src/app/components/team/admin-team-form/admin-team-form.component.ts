import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/service/team.service.service';

@Component({
  selector: 'app-admin-team-form',
  templateUrl: './admin-team-form.component.html',
  styleUrls: ['./admin-team-form.component.css']
})
export class AdminTeamFormComponent implements OnInit {

  team = { nombre: '', descripcion: '', id_entrenador: '' };

  constructor(private teamService: TeamService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.teamService.createTeam(this.team).subscribe(() => {
      this.router.navigate(['/teams']);
    });
  }

}
