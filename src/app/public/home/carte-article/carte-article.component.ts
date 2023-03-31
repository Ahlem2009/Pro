import { Component, OnInit, Input } from '@angular/core';
import {Article} from 'src/app/models/article.model'
@Component({
  selector: 'app-carte-article',
  templateUrl: './carte-article.component.html',
  styleUrls: ['./carte-article.component.css']
})
export class CarteArticleComponent implements OnInit{
@Input() item:Article
constructor() {
  this.item = {
    titre:'',
    ref: '',
    date_publication : '',
    abstract:'',
    tags :[],
  };
}
ngOnInit(): void {
  console.log(this.item);
}
}
