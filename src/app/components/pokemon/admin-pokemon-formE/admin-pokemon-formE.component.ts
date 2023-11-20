import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPokemon } from 'src/app/model/pokemon.model';
import { PokemonService } from 'src/app/service/pokemon.service.service';

@Component({
  selector: 'app-admin-pokemon-formE',
  templateUrl: './admin-pokemon-formE.component.html',
  styleUrls: ['./admin-pokemon-formE.component.css']
})
export class AdminPokemonFormEComponent implements OnInit {

@Input()
set pokemon(oIPokemon: IPokemon | undefined) {
  if (oIPokemon) {
    this.pokemonForm.patchValue({
      id: oIPokemon.id,
      nombre: oIPokemon.nombre,
      tipo1: oIPokemon.tipo1,
      tipo2: oIPokemon.tipo2,
      ataque1: oIPokemon.ataque1,
      ataque2: oIPokemon.ataque2,
      ataque3: oIPokemon.ataque3,
      ataque4: oIPokemon.ataque4,
      generacion: oIPokemon.generacion,
      habilidad: oIPokemon.habilidad,
      ataque: oIPokemon.ataque,
      salud: oIPokemon.salud,
      ataque_Especial: oIPokemon.ataque_Especial,
      defensa: oIPokemon.defensa,
      defensa_Especial: oIPokemon.defensa_Especial,
      velocidad: oIPokemon.velocidad,
      objeto: oIPokemon.objeto,
      naturaleza: oIPokemon.naturaleza,
      nivel: oIPokemon.nivel,
    });

  } else {
    this.pokemonForm.patchValue({
      id: 0,
      nombre: '',
      tipo1: '',
      tipo2: '',
      ataque1: '',
      ataque2: '',
      ataque3: '',
      ataque4: '',
      generacion: 1,
      habilidad: '',
      ataque: 1,
      salud: 1,
      ataque_especial: 1,
      defensa: 1,
      defensa_especial: 1,
      velocidad: 1,
      objeto: '',
      naturaleza: '',
      nivel: 1,
    });
  }
}

get pokemon(): IPokemon {
  return this.pokemon;
}

pokemonForm: FormGroup;

  constructor(private fb: FormBuilder, private pokemonService: PokemonService, private router: Router) {
    this.pokemonForm = this.fb.group({
      id: [0, Validators.required],
      nombre: ['', Validators.required],
      tipo1: ['', [Validators.required]],
      tipo2: ['', Validators.required],
      ataque1: ['', Validators.required],
      ataque2: ['', Validators.required],
      ataque3: ['', Validators.required],
      ataque4: ['', Validators.required],
      generacion: [1, Validators.required],
      habilidad: ['', Validators.required],
      ataque: [1, Validators.required],
      salud: [1, Validators.required],
      ataque_Especial: [1, Validators.required],
      defensa: [1, Validators.required],
      defensa_Especial: [1, Validators.required],
      velocidad: [1, Validators.required],
      objeto: ['', Validators.required],
      naturaleza: ['', Validators.required],
      nivel: [1, Validators.required],
      // Puedes agregar más campos y validadores según sea necesario
    });
  }

  ngOnInit() {
    if (this.pokemon) {
      this.pokemonForm.patchValue({
        nombre: this.pokemon.nombre,
        tipo1: this.pokemon.tipo1,
        tipo2: this.pokemon.tipo2,
        ataque1: this.pokemon.ataque1,
        ataque2: this.pokemon.ataque2,
        ataque3: this.pokemon.ataque3,
        ataque4: this.pokemon.ataque4,
        generacion: this.pokemon.generacion,
        habilidad: this.pokemon.habilidad,
        ataque: this.pokemon.ataque,
        salud: this.pokemon.salud,
        ataque_especial: this.pokemon.ataque_Especial,
        defensa: this.pokemon.defensa,
        defensa_especial: this.pokemon.defensa_Especial,
        velocidad: this.pokemon.velocidad,
        objeto: this.pokemon.objeto,
        naturaleza: this.pokemon.naturaleza,
        nivel: this.pokemon.nivel,
        // Actualiza más campos según sea necesario
      });
    }
  }

  onSubmit() {
    if (this.pokemonForm.valid) {
      //update
      this.pokemonService.updatePokemon(this.pokemonForm.get('id')?.value, this.pokemonForm.value).subscribe({
        next: (data: IPokemon) => {
          console.log('Pokemon actualizado', data);
          this.router.navigate(['/pokemon']);
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error al actualizar el pokemon', error);
        }
      });
    } else {
      console.log('Formulario inválido');
    }
  }

}
