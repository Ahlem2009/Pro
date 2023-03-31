import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AvanceComponent } from './avance/avance.component';
import { TopbarComponent } from './topbar/topbar.component';
import { VaerticalComponent } from './vaertical/vaertical.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { GlobaleComponent } from './globale/globale.component';
import { InscritComponent } from './inscrit/inscrit.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { PanelMenuModule } from 'primeng/panelmenu';

import { CategoriesComponent } from './categories/categories.component';


import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeaturesModule } from './features/features.module';
import { AuthModule } from './auth/auth.module';
import { PublicModule } from './public/public.module';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AbonnementComponent } from './service/abonnement/abonnement.component';
import { AfficheCategorieComponent } from './home/facts/affiche-categorie/affiche-categorie.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { CartesAffichantCategoriesComponent } from './home/cartes-affichant-categories/cartes-affichant-categories.component';
import { ListeArticlesComponent } from './home/liste-articles/liste-articles.component';
import { AvisExpertComponent } from './home/avis-expert/avis-expert.component';
import { PartenairesComponent } from './home/partenaires/partenaires.component';
import { CarteAvisComponent } from './home/carte-avis/carte-avis.component';
import { NewsLetterComponent } from './home/news-letter/news-letter.component';
import { CarteArticleComponent } from './home/carte-article/carte-article.component';
import { MenuCatHorizentalComponent } from './categories/menu-cat-horizental/menu-cat-horizental.component';
import { CarouselleComponent } from './home/carouselle/carouselle.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    NavbarComponent,
    LoginComponent,
    AvanceComponent,
    TopbarComponent,
    VaerticalComponent,
    ListArticleComponent,
    GlobaleComponent,
    InscritComponent,
    CategoriesComponent,
    SidebarComponent,
    HomeComponent,
    ServiceComponent,
    LoginComponent,
    AvanceComponent,
    TopbarComponent,
     ListArticleComponent,
    GlobaleComponent,
    AbonnementComponent,
    InscritComponent,
    AfficheCategorieComponent,
    AboutUsComponent ,
    CartesAffichantCategoriesComponent,
    ListeArticlesComponent,
    AvisExpertComponent,
    PartenairesComponent,
    CarteAvisComponent,
    NewsLetterComponent,
    CarteArticleComponent,
    CategoriesComponent,
    MenuCatHorizentalComponent,CarouselleComponent,
   
    CategoriesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    FeaturesModule,
    AuthModule,NgbCollapseModule,NgbAccordionModule,NgbCarouselModule, PanelMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
