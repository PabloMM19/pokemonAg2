import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/model/pokemon.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonViewModalComponent } from '../pokemon-view-modal/pokemon-view-modal.component';

@Component({
  selector: 'app-admin-pokemon-view-unrouted',
  templateUrl: './admin-pokemon-view-unrouted.component.html',
  styleUrls: ['./admin-pokemon-view-unrouted.component.css']
})
export class AdminPokemonViewUnroutedComponent implements OnInit {
  @Input() pokemonData: IPokemon[] = [];
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  verPokemon(pokemon: IPokemon): void {
    const modalRef = this.modalService.open(PokemonViewModalComponent, { size: 'lg' });
    modalRef.componentInstance.pokemon = pokemon;
  }  

}
