import { Component, Input, OnInit } from '@angular/core';
import { Abonnement } from 'src/app/models/abonnement.model';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent implements OnInit {
@Input() item : Abonnement;
constructor() {
  this.item = {
    nom: '',
    duree: '',
    nbre_question:0,
    solde: 0,
    url:'',
    
  };
}
ngOnInit(): void {
  console.log(this.item);
}
}
