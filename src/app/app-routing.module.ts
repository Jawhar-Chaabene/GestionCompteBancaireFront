import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberComponent } from './member/member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventComponent } from './event/event.component';
import { ToolsComponent } from './tools/tools.component';
import { LoginComponent } from './login/login.component';
import { FormArticleComponent } from './form-article/form-article.component';
import { AjouterCompteComponent } from './ajouter-compte/ajouter-compte.component';
import { ListComptesComponent } from './list-comptes/list-comptes.component';


const routes: Routes = [//tableau qui va contenir les routes 
  {
    path: 'create', //quand on a ce path 
    pathMatch: 'full',//ken maktebtch kima houa fel path belthabt erreur 
    component: MemberFormComponent,//elle execute ce composant 
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // Default route
  { path: 'ajouter-compte', component: AjouterCompteComponent },

  { path: 'list-comptes', component: ListComptesComponent },
  { path: '', redirectTo: 'list-comptes', pathMatch: 'full' }, // Default route
  {
    path: 'members',
    component: MemberComponent
  },

  {
    path: ':id/edit',//:id => pour afficher contenu du id 
    pathMatch: 'full',//ken maktebtch kima houa fel path belthabt erreur 
    component: MemberFormComponent,
  },

  {
    path: 'articles',
    pathMatch: 'full',//ken maktebtch kima houa fel path belthabt erreur 
    component: ArticlesComponent,
  },
  {
    path: ':article/addarticle',
    //matching complet 
    pathMatch: 'full',
    component: FormArticleComponent,
  },
  {
    path: 'events',
    pathMatch: 'full',//ken maktebtch kima houa fel path belthabt erreur 
    component: EventComponent,
  },
  {
    path: 'tools',
    pathMatch: 'full',//ken maktebtch kima houa fel path belthabt erreur 
    component: ToolsComponent,
  },
  {
    path: '',//vide 
    pathMatch: 'full',
    redirectTo: 'login',
  },

  //l'ordre intervient lezmni n7otha o5er sinon kol yahbtou fiha 
  {
    path: '**',//ken ma9itch 7ata path meli moujoudin
    redirectTo: 'members'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }