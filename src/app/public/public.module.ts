import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { PublicRoutingModule } from './public.routing'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { AvisExpertComponent } from './home/avis-expert/avis-expert.component';
import { CarouselleComponent } from './home/carouselle/carouselle.component';
import { CarteAvisComponent } from './home/carte-avis/carte-avis.component';
import { CarteArticleComponent } from './home/carte-article/carte-article.component';
import { ListeArticlesComponent } from './home/liste-articles/liste-articles.component';
import { NewsLetterComponent } from './home/news-letter/news-letter.component';
import { PartenairesComponent } from './home/partenaires/partenaires.component';
import { CartesAffichantCategoriesComponent } from './home/carte-affichant-categories/carte-affichant-categories.component';
import { ServiceComponent } from './service/service.component';
import { AbonnementComponent } from './service/abonnement/abonnement.component';
import { CategoriesComponent } from './categories/categories.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { MenuCategoriesComponent } from './categories/menu-categories/menu-categories.component'



@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    AvisExpertComponent,
    CarouselleComponent,
    CarteAvisComponent,
    CarteArticleComponent,
    ListeArticlesComponent,
    NewsLetterComponent,
    PartenairesComponent,
    CartesAffichantCategoriesComponent,
    ServiceComponent,
    AbonnementComponent,
    CategoriesComponent,
    ListArticlesComponent,
    MenuCategoriesComponent
  ],
  imports: [
    CommonModule,
    NgbModule, NgbCarouselModule, FormsModule, NgxPaginationModule, HttpClientModule,
    RouterModule.forChild(PublicRoutingModule)
  ]
})
export class PublicModule { }
