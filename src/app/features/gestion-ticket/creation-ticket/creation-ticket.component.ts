import { Component } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';


@Component({
  selector: 'app-creation-ticket',
  templateUrl: './creation-ticket.component.html',
  styleUrls: ['./creation-ticket.component.css'],
  
})
export class CreationTicketComponent {
  currentRate = 0;
listCategory :any;
selectedFiles: File[] | undefined;
constructor(private list: CategorieService) {

}
ngOnInit(): void {
    
    this.list.getCategorie().subscribe((allData:any) => {
      this.listCategory = allData;
      })
	  
}
onFileSelected(event: { target: { files: File[] | undefined; }; }): void {
	this.selectedFiles = event.target.files;
  }



}