// admin-trainer-edit.component.ts

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITrainer } from 'src/app/model/trainer.model';
import { TrainerService } from 'src/app/service/trainer.service.service';

@Component({
  selector: 'app-admin-trainer-edit',
  templateUrl: './admin-trainer-edit.component.html',
  styleUrls: ['./admin-trainer-edit.component.css']
})
export class AdminTrainerEditComponent implements OnInit {
  trainerId!: number;
  trainer: ITrainer | undefined;

  constructor(private trainerService: TrainerService, private route: ActivatedRoute) {
    const trainerIdParam = this.route.snapshot.paramMap.get('id');

    if (trainerIdParam) {
      this.trainerId = +trainerIdParam;
      this.trainerService.getTrainerDetails(this.trainerId).subscribe(
        (data) => {
          this.trainer = data;
        },
        (error) => {
          console.error('Error obteniendo detalles del entrenador', error);
        }
      );
    } else {
      console.error('No se proporcionó un ID de entrenador en los parámetros de la ruta');
      // Puedes redirigir o manejar de otra manera cuando no hay un ID de entrenador
    }



  }

  ngOnInit() {

  }

}
