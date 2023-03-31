
import { Component, OnInit } from '@angular/core';
import { Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  // isGestionTicketActive: boolean=false;
  // constructor(private router: Router) {
  //   this.isGestionTicketActive = this.router.url === '/gestion-ticket';
  // }

  urli:string[]=['/dashboard', '/gestion-doc', '/creation-Document']
  constructor(private renderer: Renderer2, private router: Router, private elRef: ElementRef) {}

  // Fonction pour mettre à jour la classe CSS
  updateClass() {
    const element = this.elRef.nativeElement.querySelector('#myDiv');
    for (let i = 1; i <=3; i++) {
      if (this.router.url === urli[i]) {
        this.renderer.addClass(element, 'nav-link py-3 px-2'); // Remplacez 'ma-classe-css' par la classe que vous voulez ajouter
      } else {
        this.renderer.removeClass(element, 'd-block p-3 link-dark text-decoration-none nav-link py-3 px-2'); // Remplacez 'ma-classe-css' par la classe que vous voulez supprimer
      }
    }
  }
}