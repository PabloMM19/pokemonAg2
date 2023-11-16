import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ITrainer } from 'src/app/model/trainer.model';

@Component({
  selector: 'app-trainer-view-modal',
  templateUrl: './trainer-view-modal.component.html',
  styleUrls: ['./trainer-view-modal.component.css']
})
export class TrainerViewModalComponent implements OnInit {
  @Input() trainer: ITrainer = {} as ITrainer;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
