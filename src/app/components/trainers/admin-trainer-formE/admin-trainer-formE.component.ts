import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITrainer } from 'src/app/model/trainer.model';
import { TrainerService } from 'src/app/service/trainer.service.service';
@Component({
  selector: 'app-admin-trainer-formE',
  templateUrl: './admin-trainer-formE.component.html',
  styleUrls: ['./admin-trainer-formE.component.css']
})
export class AdminTrainerFormEComponent implements OnInit {
  //@Input() trainer: ITrainer | undefined;


  @Input()
  set trainer(oITrainer: ITrainer | undefined) {
    if (oITrainer) {
      this.trainerForm.patchValue({
        id: oITrainer.id,
        username: oITrainer.username,
        email: oITrainer.email,
        password: oITrainer.password,
      });
    } else {
      this.trainerForm.patchValue({
        id: 0,
        username: '',
        email: '',
        password: '',
      });
    }
  }
  get trainer(): ITrainer {
    return this.trainer;
  }


  trainerForm: FormGroup;

  constructor(private fb: FormBuilder, private oTrainerService: TrainerService) {
    this.trainerForm = this.fb.group({
      id: [0, Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      // Puedes agregar más campos y validadores según sea necesario
    });
  }

  ngOnInit() {
    // Si recibes un entrenador, actualiza el formulario con sus datos
    if (this.trainer) {
      this.trainerForm.patchValue({
        username: this.trainer.username,
        email: this.trainer.email,
        password: this.trainer.password,
        // Actualiza más campos según sea necesario
      });
    }
  }

  onSubmit() {
    if (this.trainerForm.valid) {
      //update
      this.oTrainerService.updateTrainer(this.trainerForm.get('id')?.value, this.trainerForm.value).subscribe({
        next: (data: ITrainer) => {
          console.log('Entrenador actualizado', data);
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error al actualizar el entrenador', error);
        }
      });
    }
  }
}

