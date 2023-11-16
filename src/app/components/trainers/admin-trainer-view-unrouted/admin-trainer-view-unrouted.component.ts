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
  constructor(private modalService: NgbModal, private trainerService: TrainerService) { }

  ngOnInit() {
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
}
