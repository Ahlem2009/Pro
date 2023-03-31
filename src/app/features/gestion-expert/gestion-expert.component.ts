import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/models/compte.model';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-gestion-expert',
  templateUrl: './gestion-expert.component.html',
  styleUrls: ['./gestion-expert.component.css']
})
export class GestionExpertComponent implements OnInit {
  comptes: Compte[] = []; // Les comptes affichés
  page = 1; // La page courante
  pageSize = 5; // Nombre de comptes par page

  constructor(private dataService: CompteService) { }

  ngOnInit(): void {
    this.dataService.getItemsByRole('expert').subscribe(comptes => {
      this.comptes = comptes;
    });
  }

  // Retourne les comptes à afficher pour la page courante
  get comptesToShow(): Compte[] {
    const startIndex = (this.page - 1) * this.pageSize;
    return this.comptes.slice(startIndex, startIndex + this.pageSize);
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
    return Math.ceil(this.comptes.length / this.pageSize);
  }
}
