import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITrainer, ITrainerData } from '../model/trainer.model';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private apiUrl = 'http://localhost:8083'; 

  constructor(private http: HttpClient) { }

  getTrainerData(): Observable<ITrainerData> {
    return this.http.get<ITrainerData>(`${this.apiUrl}/entrenador`);
  }

  createTrainer(trainer: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/entrenador`, trainer);
  }

  deleteTrainer(trainerId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/entrenador/${trainerId}`);
  }

  updateTrainer(trainer: ITrainer): Observable<ITrainer> {
    const url = `${this.apiUrl}/entrenador/${trainer.id}`;
    return this.http.put<ITrainer>(url, trainer);
  }

  getTrainerById(trainerId: number): Observable<ITrainer> {
    return this.http.get<ITrainer>(`${this.apiUrl}/entrenador/${trainerId}`);
  }
}
