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

  currentPage: number = 0; // Establece la página actual aquí
  totalPages: number = 0;
  pageSize = 10;
  pages: number[] = [];

  constructor(private modalService: NgbModal, private teamService: TeamService) { }

  ngOnInit() {
    this.loadTeams();
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

  loadTeams() {
    this.teamService.getTeamDataPage(this.currentPage, this.pageSize).subscribe(
      data => {
        this.teamData = data.content;
        this.totalPages = data.totalPages;
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
      },
      error => {
        console.error('Error al obtener la lista de entrenadores', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadTeams();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadTeams();
    }
  }

  goToPage(page: number | null) {
    if (page !== null && page !== undefined) {
      this.currentPage = page;
      this.loadTeams();
    }
  }
  

  goToFirstPage() {
    this.currentPage = 0;
    this.loadTeams();
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
    this.loadTeams();
  }

  generatePageNumbers(): (number | string)[] {
    const pageNumbers: (number | string)[] = [];

    // Botón para ir a la primera página (<<)
    pageNumbers.push('<<');

    // Página actual -2, página actual -1, página actual, página actual +1, página actual +2
    for (let i = this.currentPage - 2; i <= this.currentPage + 2; i++) {
      if (i >= 0 && i < this.totalPages) {
        pageNumbers.push(i);
      }
    }

    // Botón para ir a la última página (>>)
    pageNumbers.push('>>');

    return pageNumbers;
  }

  createMultipleTeams(amount: number): void {
    this.teamService.createMultipleTeams(amount).subscribe(
      () => {
        console.log('Equipos creados con éxito');
        // Actualiza la lista de entrenadores después de eliminar uno
        this.actualizarListaEquipos();
      },
      error => {
        console.error('Error al crear los equipos', error);
        // Maneja el error según tus necesidades
      }
    );
  }
}
