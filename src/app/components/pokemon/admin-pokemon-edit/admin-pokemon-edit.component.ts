import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemon } from 'src/app/model/pokemon.model';
import { PokemonService } from 'src/app/service/pokemon.service.service';

@Component({
  selector: 'app-admin-pokemon-edit',
  templateUrl: './admin-pokemon-edit.component.html',
  styleUrls: ['./admin-pokemon-edit.component.css']
})
export class AdminPokemonEditComponent implements OnInit {
  pokemonId!: number;
  pokemon: IPokemon | undefined;
  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {

    const pokemonIdParam = this.route.snapshot.paramMap.get('id');
    if (pokemonIdParam) {
this.pokemonId = +pokemonIdParam;
this.pokemonService.getDetailsPokemon(this.pokemonId).subscribe(
  (data) => {
    this.pokemon = data;
  },
  (error) => {
    console.error('Error obteniendo detalles del pokemon', error);
  });
    } else {
      console.error('No se proporcionó un ID de pokemon en los parámetros de la ruta');
      // Puedes redirigir o manejar de otra manera cuando no hay un ID de pokemon
    }

  }

  ngOnInit() {
  }

}
