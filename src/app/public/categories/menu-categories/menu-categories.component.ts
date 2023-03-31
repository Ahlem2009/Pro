import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CategorieService} from 'src/app/services/categorie.service';
import {Categorie} from 'src/app/models/categorie.model'
@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css']
})
export class MenuCategoriesComponent {
//   card!:Categorie;
//   // color:string=''
//   constructor(private service:CategorieService, private router:ActivatedRoute){

//   }
// getCardByName(nom:string):void{
// this.service.getCategoryByName(nom).subscribe(data=>{
// // this.card=data[0];
// })
// }
// ngOnInit():void{
//   const nom=this.router.snapshot.paramMap.get('nom')
//   if (nom!=null) {
//     this.getCardByName(nom);
//   // this.color=this.card
// }

// }
}
