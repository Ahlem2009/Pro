import { Component } from '@angular/core';
import { Abonnement } from 'src/app/models/abonnement.model';
import { AbonnementService } from 'src/app/services/abonnement.service';

@Component({
  selector: 'app-gestion-offre',
  templateUrl: './gestion-offre.component.html',
  styleUrls: ['./gestion-offre.component.css']
})
export class GestionOffreComponent {
  
  abonnements: Abonnement[] = []; // Les Abonnements affichés
  page = 1; // La page courante
  pageSize = 5; // Nombre de Abonnements par page

  constructor(private AbonnementService: AbonnementService) { }

  ngOnInit() {
    this.loadAbonnements();
  }

  // Charge les Abonnements depuis le serveur
  loadAbonnements() {
    this.AbonnementService.getAbonnements().subscribe(abonnements => {
      this.abonnements = abonnements;
    });
  }

  // Retourne les Abonnements à afficher pour la page courante
  get AbonnementsToShow(): Abonnement[] {
    const startIndex = (this.page - 1) * this.pageSize;
    return this.abonnements.slice(startIndex, startIndex + this.pageSize);
  }

  // Passe à la page suivante
  nextPage() {
    if (this.page < this.pageCount) {
      this.page++;
    }
  }

  // Passe à la page précédente
  prevPage() {
    if (this.page > 1) {
      this.page--;
    }
  }

  // Retourne le nombre total de pages
  get pageCount(): number {
    return Math.ceil(this.abonnements.length / this.pageSize);
  }
}
