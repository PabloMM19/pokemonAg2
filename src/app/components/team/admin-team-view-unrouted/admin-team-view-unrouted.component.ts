import { Component, Input, OnInit } from '@angular/core';
import { ITeam } from 'src/app/model/team.model';
import { TeamViewModalComponent } from '../team-view-modal/team-view-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamService } from 'src/app/service/team.service.service';

@Component({
  selector: 'app-admin-team-view-unrouted',
  templateUrl: './admin-team-view-unrouted.component.html',
  styleUrls: ['./admin-team-view-unrouted.component.css']
})
export class AdminTeamViewUnroutedComponent implements OnInit {
  @Input() teamData: ITeam[] = [];
  constructor(private modalService: NgbModal, private teamService: TeamService) { }

  ngOnInit() {
  }
  verEquipos(team: ITeam): void {
    const modalRef = this.modalService.open(TeamViewModalComponent, { size: 'lg' });
    modalRef.componentInstance.team = team;
  }

  eliminarTeam(teamId: number): void {
    this.teamService.deleteTeam(teamId).subscribe(
      () => {
        console.log('Entrenador eliminado con éxito');
        // Actualiza la lista de entrenadores después de eliminar uno
        this.actualizarListaEquipos();
      },
      error => {
        console.error('Error al eliminar el entrenador', error);
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
        console.error('Error al obtener la lista de entrenadores', error);
        // Maneja el error según tus necesidades
      }
    );
  }
}
