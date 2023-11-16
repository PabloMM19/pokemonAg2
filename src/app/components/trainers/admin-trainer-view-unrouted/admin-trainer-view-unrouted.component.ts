import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ITrainer } from 'src/app/model/trainer.model';
import { TrainerViewModalComponent } from '../trainer-view-modal/trainer-view-modal.component';

@Component({
  selector: 'app-admin-trainer-view-unrouted',
  templateUrl: './admin-trainer-view-unrouted.component.html',
  styleUrls: ['./admin-trainer-view-unrouted.component.css']
})
export class AdminTrainerViewUnroutedComponent implements OnInit {
  @Input() trainerData: ITrainer[] = [];
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  verTrainer(trainer: ITrainer): void {
    const modalRef = this.modalService.open(TrainerViewModalComponent, { size: 'lg' });
    modalRef.componentInstance.trainer = trainer;
  }

}
