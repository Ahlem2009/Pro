import { Injectable } from '@angular/core';
import { Partenaire } from '../models/partenaire.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PartenairesService {

  baseUrl = 'http://localhost:3000/partenaires';

  constructor(private http: HttpClient) {}

  getPartenaire() {
    return this.http.get<Partenaire []>(this.baseUrl);
  }
}
