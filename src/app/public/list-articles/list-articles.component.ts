import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import {Article} from 'src/app/models/article.model'

// interface article{
//   id:Number;
//   titre:String;
//   reference:Number;
//   date:String;
//   domaine:String;
//   texte:String;
// }

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit{
  article: FormGroup | undefined;
  constructor(private http : HttpClient , private fb : FormBuilder){
  }
  ListArticle:any;
  ngOnInit(): void {
    this.article=this.fb.group({
      titre : [],
      reference : [],
      date : [],
      texte : []
    })
    this.Get()
  }
  GetAtricle(){
    return this.http.get<any>("http://localhost:3000/art").pipe(map((res:any)=>{
      return res;
    }))

  }
  Get(){
    this.GetAtricle().subscribe(res=>{
      this.ListArticle=res;
    })
  }

}
