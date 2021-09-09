import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},

  {path:'home', component:HomeComponent},
  {path:'sobre', component:SobreNosComponent},
  {path:'entrar', component:EntrarComponent},
  {path:'cadastrar', component:CadastrarComponent},
  {path:'feed', component: FeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
