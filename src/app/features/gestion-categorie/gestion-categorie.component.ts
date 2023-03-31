import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Categorie } from 'src/app/models/categorie.model';

import { CategorieService } from 'src/app/services/categorie.service';


@Component({
  selector: 'app-gestion-categorie',
  templateUrl: './gestion-categorie.component.html',
  styleUrls: ['./gestion-categorie.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GestionCategorieComponent {
  item1: Categorie[] = [];
  closeResult: string='';

  constructor(
    private service: CategorieService, private modalService: NgbModal
  ) { }
 
  ngOnInit() {
  
    this.GetCategorie();
  }
  
  GetCategorie() {
    this.service.getCategorie().subscribe((allData) => {
      this.item1 = allData;
      console.log(this.item1);
 
    });}
  
	openModalDialogCustomClass(content:any) {
		this.modalService.open(content, {size: 'lg' });
	}

}