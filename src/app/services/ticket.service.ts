import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket} from '../models/ticket.model';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private baseUrl = 'http://localhost:3000/ticket'; // URL de l'API json-server

  constructor(private http: HttpClient) {}
  getTopTickets() :Observable<Ticket[]> { 
    return this.http.get<Ticket[]>(`${this.baseUrl}?_limit=5`);
  }
 


  // Récupère tous les tickets
  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.baseUrl}`);
  }

  // Récupère un ticket par son id
  getById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.baseUrl}/${id}`);
  }

  // Crée un nouveau ticket
  create(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.baseUrl}`, ticket);
  }

  // Met à jour un ticket existant
  update(id: number, ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.baseUrl}/${id}`, ticket);
  }

  // Supprime un ticket existant
  delete(id: number): Observable<Ticket> {
    return this.http.delete<Ticket>(`${this.baseUrl}/${id}`);
  }
}