import { Component } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-creer-type-theme',
  templateUrl: './creer-type-theme.component.html',
  styleUrls: ['./creer-type-theme.component.css']
})
export class CreerTypeThemeComponent {

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

