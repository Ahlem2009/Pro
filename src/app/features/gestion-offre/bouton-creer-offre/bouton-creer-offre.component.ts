import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-bouton-creer-offre',
  templateUrl: './bouton-creer-offre.component.html',
  styleUrls: ['./bouton-creer-offre.component.css'],
  encapsulation: ViewEncapsulation.None,
	
})
export class BoutonCreerOffreComponent {
  closeResult: string='';

	constructor(private modalService: NgbModal) {}

	


	openModalDialogCustomClass(content:any) {
		this.modalService.open(content, {size: 'lg' });
	}
}
