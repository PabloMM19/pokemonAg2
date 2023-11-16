import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainerService } from 'src/app/service/trainer.service.service';

@Component({
  selector: 'app-admin-trainer-form',
  templateUrl: './admin-trainer-form.component.html',
  styleUrls: ['./admin-trainer-form.component.css']
})
export class AdminTrainerFormComponent implements OnInit {
  trainer = { username: '', email: '', password: '' };

  constructor(private trainerService: TrainerService, private router: Router) {}

  ngOnInit() {
  }
  onSubmit() {
    this.trainerService.createTrainer(this.trainer).subscribe(() => {
      this.router.navigate(['/trainers']);
    });
  }
}
