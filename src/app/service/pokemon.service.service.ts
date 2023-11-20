import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemon, IPokemonData } from '../model/pokemon.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'http://localhost:8083'; 

  constructor(private http: HttpClient) { }

  getPokemonData(): Observable<IPokemonData> {
    return this.http.get<IPokemonData>(`${this.apiUrl}/pokemon?page=0&size=10`);
  }

  getPokemonDataPage(pageNumber: number, pageSize: number): Observable<IPokemonData> {
    const url = `${this.apiUrl}/pokemon?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<IPokemonData>(url);
  }

  getDetailsPokemon(pokemonId: number): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.apiUrl}/pokemon/${pokemonId}`);
  }

  createPokemon(pokemon: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/pokemon`, pokemon);
  }

  updatePokemon(id: number, pokemon: IPokemon): Observable<IPokemon> {
    const url = `${this.apiUrl}/pokemon/${id}`;
    return this.http.put<IPokemon>(url, pokemon);
  }

  deletePokemon(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/pokemon/${id}`);
  }

  getPokemonById(id: number): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.apiUrl}/pokemon/${id}`);
  }

  createMultiplePokemon(amount: number): Observable<any> {
    const pokemons: any[] = [];

    for (let i = 0; i < amount; i++) {
      const pokemon = {
        nombre: `Pokemon ${i}`,
        tipo1: 'Normal',
        tipo2: 'Fuego',
        habilidad: 'Mar llamas',
        ataque: 50,
        defensa: 50,
        velocidad: 50,
        salud: 50,
        ataque_Especial: 50,
        defensa_Especial: 50,
        ataque1: 'Placaje',
        ataque2: 'Lanzallamas',
        ataque3: 'Giro Fuego',
        ataque4: 'Llamarada',
        nivel: 50,
        objeto: 'Vidasfera',
        generacion: 1,
        naturaleza: 'Alegre'
      };
      pokemons.push(pokemon);
    }

    return this.http.post(`${this.apiUrl}/pokemon/populate/${amount}`, pokemons);
  }

}
