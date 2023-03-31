import { Component } from '@angular/core';
import {Abonnement} from '../models/abonnement.model';
import {AbonnementService} from '../services/abonnement.service';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  data:Abonnement[] =[];
  constructor(private dataAbonnement: AbonnementService) { }
  
  ngOnInit() {
    this.dataAbonnement.getAbonnements()
    .subscribe((allData) => {
      this.data = allData;
      console.log(this.data);
      
    });
  }

}
