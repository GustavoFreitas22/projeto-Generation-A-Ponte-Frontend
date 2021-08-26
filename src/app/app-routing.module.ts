import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},

  {path:'home', component:HomeComponent},
  {path:'sobre', component:SobreNosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
