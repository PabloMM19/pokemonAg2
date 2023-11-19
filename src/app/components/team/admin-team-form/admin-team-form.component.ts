import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITeam } from 'src/app/model/team.model';
import { TeamService } from 'src/app/service/team.service.service';

@Component({
  selector: 'app-admin-team-form',
  templateUrl: './admin-team-form.component.html',
  styleUrls: ['./admin-team-form.component.css']
})
export class AdminTeamFormComponent implements OnInit {
  @Input() teamData: ITeam[] = [];
  team = { nombre: '', descripcion: '', id_entrenador: '' };

  constructor(private teamService: TeamService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.teamService.createTeam(this.team).subscribe(() => {
      this.router.navigate(['/teams']);
    });
  }

  eliminarTeam(teamId: number): void {
    this.teamService.deleteTeam(teamId).subscribe(
      () => {
        console.log('Equipo eliminado con éxito');
        // Actualiza la lista de entrenadores después de eliminar uno
        this.actualizarListaEquipos();
      },
      error => {
        console.error('Error al eliminar el equipo', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  private actualizarListaEquipos(): void {
    // Llama a tu servicio para obtener la lista actualizada de entrenadores
    this.teamService.getTeamData().subscribe(
      data => {
        this.teamData = data.content;
      },
      error => {
        console.error('Error al obtener la lista de equipos', error);
        // Maneja el error según tus necesidades
      }
    );
  }

}
