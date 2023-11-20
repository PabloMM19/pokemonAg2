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
    return this.http.get<ITrainerData>(`${this.apiUrl}/entrenador?page=0&size=10`);
  }

  getTrainerDataPage(pageNumber: number, pageSize: number): Observable<ITrainerData> {
    const url = `${this.apiUrl}/entrenador?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<ITrainerData>(url);
  }
  

  createTrainer(trainer: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/entrenador`, trainer);
  }

  deleteTrainer(trainerId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/entrenador/${trainerId}`);
  }

  getTrainerDetails(trainerId: number): Observable<ITrainer> {
    return this.http.get<ITrainer>(`${this.apiUrl}/entrenador/${trainerId}`);
  }
  
  updateTrainer(trainerId: number, trainer: ITrainer): Observable<ITrainer> {
    const url = `${this.apiUrl}/entrenador/${trainerId}`;
    return this.http.put<ITrainer>(url, trainer);
  }
  

  getTrainerById(trainerId: number): Observable<ITrainer> {
    return this.http.get<ITrainer>(`${this.apiUrl}/entrenador/${trainerId}`);
  }

  createMultipleTrainers(amount: number): Observable<any> {
    const trainers: any[] = [];

    for (let i = 0; i < amount; i++) {
      const trainer = {
        username: `Entrenador ${i}`,
        email: `email${i}@gmail.com`,
        password: 'Prueba123',
        role: false
      };
      trainers.push(trainer);
    }

    return this.http.post(`${this.apiUrl}/entrenador/populate/${amount}`, trainers);
  }

  deleteAllTrainers(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/entrenador/empty`);
  }
}
