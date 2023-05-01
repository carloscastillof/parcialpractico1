import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Planta } from './planta';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  private apiUrl: string = environment.baseUrl;

  getPlants(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl);
  }
  constructor(private http: HttpClient) { }
}
