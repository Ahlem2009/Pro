import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-creation-document',
  templateUrl: './creation-document.component.html',
  styleUrls: ['./creation-document.component.css']
})
export class CreationDocumentComponent {
  
  constructor(private list: CategorieService) {
    
  }
  
    selectedCategory: any = {};
    selectedTheme: any = {};
    selectedType: any = {};
    listCategory :any;
  
  
  
    ngOnInit() {
      this.list.getCategorie().subscribe((allData:any) => {
        this.listCategory = allData;
        })
    }
  
    filterStates() {
      this.selectedTheme = {};
      this.selectedType= {};
    }

}
