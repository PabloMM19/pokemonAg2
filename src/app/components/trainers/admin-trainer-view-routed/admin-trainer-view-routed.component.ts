import { Component, OnInit } from '@angular/core';
import { ITrainer, ITrainerData } from 'src/app/model/trainer.model';
import { TrainerService } from 'src/app/service/trainer.service.service';

@Component({
  selector: 'app-admin-trainer-view-routed',
  templateUrl: './admin-trainer-view-routed.component.html',
  styleUrls: ['./admin-trainer-view-routed.component.css']
})
export class AdminTrainerViewRoutedComponent implements OnInit {

  trainerData: ITrainer[] = [];

  constructor(private dataService: TrainerService) {}

  ngOnInit(): void {
    this.dataService.getTrainerData().subscribe((data: ITrainerData) => {
      this.trainerData = data.content;
      console.log(data); // Imprime los datos en la consola para verificar
    });
  }
}
