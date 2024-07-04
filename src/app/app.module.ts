import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { FaturaSuksesComponent } from './fatura-sukses/fatura-sukses.component';
import { FaturaComponent } from './fatura/fatura.component';
// for ngModel
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PurchaseCompleteGuard } from './purchase-complete.guard';
import { Fatura2Component } from './fatura2/fatura2.component';

// for modal

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent,
    CardComponent,
    FaturaSuksesComponent,
    FaturaComponent,
    Fatura2Component,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
   
  ],
  providers: [PurchaseCompleteGuard], //put guard here
  bootstrap: [AppComponent]
})
export class AppModule { }
