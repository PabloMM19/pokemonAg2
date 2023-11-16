import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IPokemon } from 'src/app/model/pokemon.model';

@Component({
  selector: 'app-pokemon-view-modal',
  templateUrl: './pokemon-view-modal.component.html',
  styleUrls: ['./pokemon-view-modal.component.css']
})
export class PokemonViewModalComponent implements OnInit {
  @Input() pokemon: IPokemon = {} as IPokemon;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
