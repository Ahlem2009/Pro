import { Component } from '@angular/core';
import {PartenairesService} from 'src/app/services/partenaires.service';
import {Partenaire} from 'src/app/models/partenaire.model'
@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent {
  data:Partenaire[] =[];
  constructor(private dataPartenaire: PartenairesService) { }
  
  ngOnInit() {
    this.dataPartenaire.getPartenaire()
    .subscribe((allData) => {
      this.data = allData;
      console.log(this.data);
      
    });
  }
}
