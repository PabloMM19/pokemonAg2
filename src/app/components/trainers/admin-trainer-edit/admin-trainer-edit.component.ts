import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TrainerService } from 'src/app/service/trainer.service.service';

@Component({
  selector: 'app-admin-trainer-edit',
  templateUrl: './admin-trainer-edit.component.html',
  styleUrls: ['./admin-trainer-edit.component.css']
})
export class AdminTrainerEditComponent implements OnInit {
  isCreating: boolean = false;
  trainerId: number | null = null; // Inicialízalo a null
  trainerForm: FormGroup; // Agrega la referencia al formulario
  loadedFormData: any;

  constructor(private route: ActivatedRoute, private trainerService: TrainerService, private fb: FormBuilder) {
    this.trainerForm = this.fb.group({
      // Define tus campos y validadores aquí
      // ...
    });
  }

  onFormData(formData: any) {
    this.loadedFormData = formData;

    // Puedes realizar acciones adicionales aquí si es necesario

    // Por ejemplo, si necesitas pasar los datos a otro componente hijo
    // this.anotherChildComponent.setFormData(formData);
  }

  ngOnInit() {
    // Comprueba si this.route.snapshot es nulo antes de acceder a paramMap
    if (this.route.snapshot && this.route.snapshot.paramMap) {
      const idParam = this.route.snapshot.paramMap.get('id');
      if (idParam) {
        this.trainerId = +idParam;
      }
    }
  
    if (this.trainerId !== null) {
      this.isCreating = false;
  
      // Obtén los datos del entrenador y asigna al formulario
      this.trainerService.getTrainerById(this.trainerId).subscribe((trainer) => {
        console.log('Trainer data:', trainer);
        // Puedes asignar los valores al formulario aquí
        this.trainerForm.patchValue({
          username: trainer.username,
          email: trainer.email,
          password: trainer.password
          // Añade otros campos según sea necesario
        });
      });
    } else {
      // Manejo de caso donde trainerId es nulo (puedes redirigir a otra página o manejar de otra manera)
    }
  }
  
}
