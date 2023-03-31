import { Component } from '@angular/core';
import { Categorie } from 'src/app/models/categorie.model';
import {CategorieService} from 'src/app/services/categorie.service'
@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent  {
  Categories:Categorie[] =[];
  constructor(private dataCategorie: CategorieService) { }
  
  ngOnInit() {
    this.dataCategorie.getCategorie()
    .subscribe((allData) => {
      this.Categories = allData;
      console.log(this.Categories);
      
    });
  }
}
