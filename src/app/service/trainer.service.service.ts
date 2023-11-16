import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITrainerData } from '../model/trainer.model';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private apiUrl = 'http://localhost:8083'; 

  constructor(private http: HttpClient) { }

  getPokemonData(): Observable<ITrainerData> {
    return this.http.get<ITrainerData>(`${this.apiUrl}/entrenador`);
  }

}
