import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ITeam } from 'src/app/model/team.model';
import { TeamService } from 'src/app/service/team.service.service';

@Component({
  selector: 'app-admin-team-formE',
  templateUrl: './admin-team-formE.component.html',
  styleUrls: ['./admin-team-formE.component.css']
})
export class AdminTeamFormEComponent implements OnInit {

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

  constructor(private fb: FormBuilder, private oTeamService: TeamService, private router: Router) {
    this.teamForm = this.fb.group({
      id: [null],
      nombre: [''],
      descripcion: [''],
      entrenador: [''],
    });
  }

  ngOnInit() {
    if (this.team) {
      this.teamForm.patchValue({
        nombre: this.team.nombre,
        descripcion: this.team.descripcion,
        entrenador: this.team.entrenador.id,
      });
    }
  }

  onSubmit() {
    if (this.teamForm.valid) {
      this.oTeamService.updateTeam(this.teamForm.get('id')?.value,this.teamForm.value).subscribe({
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
