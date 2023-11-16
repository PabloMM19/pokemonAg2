import { Component, OnInit } from '@angular/core';
import { IPokemon, IPokemonData } from 'src/app/model/pokemon.model';
import { PokemonService } from 'src/app/service/pokemon.service.service';

@Component({
  selector: 'app-admin-pokemon-view-routed',
  templateUrl: './admin-pokemon-view-routed.component.html',
  styleUrls: ['./admin-pokemon-view-routed.component.css']
})
export class AdminPokemonViewRoutedComponent implements OnInit {
  pokemonData: IPokemon[] = [];

  constructor(private dataService: PokemonService) {}

  ngOnInit(): void {
    this.dataService.getPokemonData().subscribe((data: IPokemonData) => {
      this.pokemonData = data.content;
      console.log(data); // Imprime los datos en la consola para verificar
    });
  }
}
