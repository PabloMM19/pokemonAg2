import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ITrainer } from 'src/app/model/trainer.model';
import { TrainerViewModalComponent } from '../trainer-view-modal/trainer-view-modal.component';
import { TrainerService } from 'src/app/service/trainer.service.service';

@Component({
  selector: 'app-admin-trainer-view-unrouted',
  templateUrl: './admin-trainer-view-unrouted.component.html',
  styleUrls: ['./admin-trainer-view-unrouted.component.css']
})
export class AdminTrainerViewUnroutedComponent implements OnInit {
  @Input() trainerData: ITrainer[] = [];
  
  currentPage: number = 0; // Establece la página actual aquí
  totalPages: number = 0;
  pageSize = 10;
  pages: number[] = [];

  constructor(private modalService: NgbModal, private trainerService: TrainerService) { }

  ngOnInit() {
    this.loadTrainers();
  }

  verTrainer(trainer: ITrainer): void {
    const modalRef = this.modalService.open(TrainerViewModalComponent, { size: 'lg' });
    modalRef.componentInstance.trainer = trainer;
  }

  eliminarTrainer(trainerId: number): void {
    this.trainerService.deleteTrainer(trainerId).subscribe(
      () => {
        console.log('Entrenador eliminado con éxito');
        // Actualiza la lista de entrenadores después de eliminar uno
        this.actualizarListaEntrenadores();
      },
      error => {
        console.error('Error al eliminar el entrenador', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  private actualizarListaEntrenadores(): void {
    // Llama a tu servicio para obtener la lista actualizada de entrenadores
    this.trainerService.getTrainerData().subscribe(
      data => {
        this.trainerData = data.content;
      },
      error => {
        console.error('Error al obtener la lista de entrenadores', error);
        // Maneja el error según tus necesidades
      }
    );
  }
  loadTrainers() {
    this.trainerService.getTrainerDataPage(this.currentPage, this.pageSize).subscribe(
      data => {
        this.trainerData = data.content;
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
      this.loadTrainers();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadTrainers();
    }
  }

  goToPage(page: number | null) {
    if (page !== null && page !== undefined) {
      this.currentPage = page;
      this.loadTrainers();
    }
  }
  

  goToFirstPage() {
    this.currentPage = 0;
    this.loadTrainers();
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
    this.loadTrainers();
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

  createMultipleTrainers(amount: number): void {
    this.trainerService.createMultipleTrainers(amount).subscribe(
      () => {
        console.log(`${amount} Entrenadores creados con éxito`);
        // Actualiza la lista de entrenadores después de crearlos
        this.loadTrainers();
      },
      error => {
        console.error('Error al crear entrenadores', error);
        // Maneja el error según tus necesidades
      }
    );
  }

  deleteAllTrainers(): void {
    this.trainerService.deleteAllTrainers().subscribe(
      () => {
        console.log('Todos los entrenadores eliminados con éxito');
        // Actualiza la lista de entrenadores después de borrar todos
        this.loadTrainers();
      },
      error => {
        console.error('Error al borrar todos los entrenadores', error);
        // Maneja el error según tus necesidades
      }
    );
  }

}
