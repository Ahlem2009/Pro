import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FeauturesRoutingModule } from './features.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import {GestionClientComponent} from './gestion-client/gestion-client.component'
import {GestionExpertComponent} from './gestion-expert/gestion-expert.component'
import {GestionManagerComponent} from './gestion-manager/gestion-manager.component'
import {GestionOffreComponent} from './gestion-offre/gestion-offre.component';
import {BoutonCreerOffreComponent} from './gestion-offre/bouton-creer-offre/bouton-creer-offre.component'
import {CreerOffreComponent} from './gestion-offre/creer-offre/creer-offre.component';
import { CardsComponent } from './dashboard/cards/cards.component';
import { ContentComponent } from './dashboard/content/content.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { ListDocComponent } from './dashboard/list-doc/list-doc.component';
import { TicketComponent } from './dashboard/ticket/ticket.component'

import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionDocumentComponent } from './gestion-document/gestion-document.component';
import { GestionTicketComponent } from './gestion-ticket/gestion-ticket.component';
import { BarreRechercheComponent } from '../barre-recherche/barre-recherche.component';
import { CreationDocumentComponent } from './gestion-document/creation-document/creation-document.component';
import { CreationTicketComponent } from './gestion-ticket/creation-ticket/creation-ticket.component';
import { GestionCategorieComponent } from './gestion-categorie/gestion-categorie.component';
import { CreationCategorieComponent } from './gestion-categorie/creation-categorie/creation-categorie.component';
import { CreerTypeThemeComponent } from './gestion-categorie/creer-type-theme/creer-type-theme.component';



@NgModule({
  declarations: [
    GestionClientComponent,
    GestionExpertComponent,
    GestionManagerComponent,
    GestionOffreComponent,
    BoutonCreerOffreComponent,
    CreerOffreComponent,
    CardsComponent,
    ContentComponent,
    HeaderComponent,
    ListDocComponent,
    TicketComponent,
    DashboardComponent,
    GestionDocumentComponent,
    GestionTicketComponent,
    BarreRechercheComponent,
    CreationDocumentComponent,
    CreationTicketComponent,
    GestionCategorieComponent,
    CreationCategorieComponent,
    CreerTypeThemeComponent
    
  ],       
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forChild(FeauturesRoutingModule),
    NgxPaginationModule, NgbModule
    ]
})
export class FeaturesModule { }
