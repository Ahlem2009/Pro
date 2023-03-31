import { Component } from '@angular/core';
import {Abonnement} from 'src/app/models/abonnement.model';
import {AbonnementService} from 'src/app/services/abonnement.service';
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
