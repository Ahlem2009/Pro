import { Component } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { Ticket } from 'src/app/models/ticket.model';
import { ArticleService } from 'src/app/services/article.service';
import { TicketService } from 'src/app/services/ticket.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  // document
  item1: Article[] = [];
  //ticket
  item2: Ticket[] = [];
  constructor(
     private service: TicketService,
     private service1: ArticleService
  ) { }
 
  ngOnInit() {
    //document
     this.GetArticle();
    //ticket
    this.GetTicket();
  }
   GetArticle() {
    this.service1.getArticles().subscribe((allData) => {
      this.item1 = allData;
      console.log(this.item1);
 
     });
   }
  GetTicket() {
    this.service.getTickets().subscribe((allData) => {
      this.item2 = allData;
      console.log(this.item2);
 
    });
  }

}
