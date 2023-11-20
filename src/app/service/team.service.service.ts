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

  getTeamData(): Observable<ITeamData> {
    return this.http.get<ITeamData>(`${this.apiUrl}/equipo?page=0&size=10`);
  }

  getTeamDataPage(pageNumber: number, pageSize: number): Observable<ITeamData> {
    const url = `${this.apiUrl}/equipo?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<ITeamData>(url);
  }

  getTeamDetails(teamId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/equipo/${teamId}`);
  }

  updateTeam(teamId: number, team: any): Observable<any> {
    const url = `${this.apiUrl}/equipo/${teamId}`;
    return this.http.put(url, team);
  }

  createTeam(team: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/equipo`, team);
  }

  deleteTeam(teamId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/equipo/${teamId}`);
  }

  createMultipleTeams(amount: number): Observable<any> {
    const teams: any[] = [];

    for (let i = 0; i < amount; i++) {
      const team = {
        nombre: `Equipo ${i}`,
        descripcion: 'Equipo de prueba',
        entrenador: 1
      };
      teams.push(team);
    }

    return this.http.post(`${this.apiUrl}/equipo/populate/${amount}`, teams);
  }
}
