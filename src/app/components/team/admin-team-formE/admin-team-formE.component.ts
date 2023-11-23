import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ITeam } from 'src/app/model/team.model';
import { ITrainer, ITrainerData } from 'src/app/model/trainer.model';
import { TeamService } from 'src/app/service/team.service.service';
import { TrainerService } from 'src/app/service/trainer.service.service';

@Component({
  selector: 'app-admin-team-formE',
  templateUrl: './admin-team-formE.component.html',
  styleUrls: ['./admin-team-formE.component.css']
})
export class AdminTeamFormEComponent implements OnInit {
  trainers: ITrainer[] = []; // Lista de entrenadores
@Input()
set team(oITeam: ITeam | undefined) {
  if (oITeam) {
    this.teamForm.patchValue({
      id: oITeam.id,
      nombre: oITeam.nombre,
      descripcion: oITeam.descripcion,
      entrenador: oITeam.id,
    });
  } else {
    this.teamForm.patchValue({
      id: 0,
      nombre: '',
      descripcion: '',
      entrenador: '',
    });
  }
}
get team(): ITeam {
  return this.team;
}

teamForm: FormGroup;

  constructor(private fb: FormBuilder, private oTeamService: TeamService, private router: Router, private trainerService: TrainerService) {
    this.teamForm = this.fb.group({
      id: [null],
      nombre: [''],
      descripcion: [''],
      entrenador: [''],
    });
  }

  ngOnInit() {
    // Carga la lista de entrenadores al inicializar el componente
    this.trainerService.getalltrainers().subscribe(
      trainers => {
        console.log('Trainers received:', trainers);
        this.trainers = trainers; // Asegúrate de que trainers sea un array
      },
      error => console.error('Error fetching trainers:', error)
    );
    
  }

  onSubmit() {
    if (this.teamForm.valid) {
      this.oTeamService.updateTeam(this.teamForm.get('id')?.value, this.teamForm.value).subscribe({
        next: (data: ITeam) => {
          console.log('Equipo actualizado exitosamente', data);
          this.router.navigate(['/teams']);
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error actualizando el equipo', error);
        }
    });
    } else {
      console.error('El formulario no es válido');
    }
  }

}
