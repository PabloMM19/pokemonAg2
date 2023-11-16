import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemonData } from '../model/pokemon.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'http://localhost:8083'; 

  constructor(private http: HttpClient) { }

  getPokemonData(): Observable<IPokemonData> {
    return this.http.get<IPokemonData>(`${this.apiUrl}/pokemon`);
  }

}
