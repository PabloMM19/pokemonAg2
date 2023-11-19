import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/service/pokemon.service.service';

@Component({
  selector: 'app-admin-pokemon-form',
  templateUrl: './admin-pokemon-form.component.html',
  styleUrls: ['./admin-pokemon-form.component.css']
})
export class AdminPokemonFormComponent implements OnInit {
pokemon = {nombre:'', tipo1:'', tipo2:'', ataque1:'', ataque2:'', ataque3:'', ataque4:'', generacion:'',
habilidad:'', ataque:'', defensa:'', velocidad:'', salud:'', ataque_especial:'', defensa_especial:'',
objeto:'', naturaleza:'', nivel:''};

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.pokemonService.createPokemon(this.pokemon).subscribe(() => {
      this.router.navigate(['/pokemon']);
    });
  }

  

}
