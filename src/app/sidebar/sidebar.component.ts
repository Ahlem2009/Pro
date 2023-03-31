
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  isGestionTicketActive: boolean=false;
  constructor(private router: Router) {
    this.isGestionTicketActive = this.router.url === '/gestion-ticket';
  }

  


 
}