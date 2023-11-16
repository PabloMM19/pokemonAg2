import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITeamData } from '../model/team.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = 'http://localhost:8083'; 

  constructor(private http: HttpClient) { }

  getPokemonData(): Observable<ITeamData> {
    return this.http.get<ITeamData>(`${this.apiUrl}/equipo`);
  }
}
