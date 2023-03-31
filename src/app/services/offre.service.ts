import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offre } from '../models/offre.model';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  baseUrl = 'http://localhost:3000/abonnement';

  constructor(private http: HttpClient) {}

  getAbonnements() {
    return this.http.get<Offre []>(this.baseUrl);
  }
}