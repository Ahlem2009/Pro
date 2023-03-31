import { NgModule } from '@angular/core';
import { tick } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { AvanceComponent } from './avance/avance.component';

// import { FactsComponent } from './home/facts/facts.component';
import { FooterComponent } from './footer/footer.component';
import { GlobaleComponent } from './globale/globale.component';
import { HomeComponent } from './public/home/home.component';
import { InscritComponent } from './inscrit/inscrit.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RechercheComponent } from './recherche/recherche.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { VaerticalComponent } from './vaertical/vaertical.component';
import {DashboardComponent} from './features/dashboard/dashboard.component'

const routes: Routes = [
  {path:"",component:HomeComponent},
  {
    path:'dashboard',
component:DashboardComponent,
children:[
  {
    path:'',
    loadChildren: () => import('./features/features.module').then(x=>x.FeaturesModule)
  }]},
  {
    path:'login',
component:LoginComponent,
children:[
  {
    path:'',
    loadChildren: () => import('./auth/auth.module').then(x=>x.AuthModule)
  }
]
},
{
  path:'h',
component:HomeComponent,
children:[
{
  path:'',
  loadChildren: () => import('./public/public.module').then(x=>x.PublicModule)
}
]
},

  {path:"login",component:LoginComponent},
  {path:"avance",component:AvanceComponent},
  {path:"topbar",component:TopbarComponent},
  // {path:"facts",component:FactsComponent},
  {path:"vaertical",component:VaerticalComponent},
  {path:"list-article",component:ListArticleComponent},
  {path:"globale",component:GlobaleComponent},
  {path:"inscription",component:InscritComponent},
  
  {path:"recherche",component:RechercheComponent},
  {path:"sidebar",component:SidebarComponent},
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
