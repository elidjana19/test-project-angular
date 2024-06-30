import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { FaturaSuksesComponent } from './fatura-sukses/fatura-sukses.component';
import { FaturaComponent } from './fatura/fatura.component';
import { PurchaseCompleteGuard } from './purchase-complete.guard';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'card', component:CardComponent},
  {path:'fatura', component:FaturaComponent, canActivate: [PurchaseCompleteGuard]},
  {path:'fatura-sukses', component:FaturaSuksesComponent, canActivate: [PurchaseCompleteGuard]},
  { path: 'category/:id', component: CategoryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }