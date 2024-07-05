import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { FaturaSuksesComponent } from './fatura-sukses/fatura-sukses.component';
import { FaturaComponent } from './fatura/fatura.component';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { PurchaseCompleteGuard } from './purchase-complete.guard';
import { Fatura2Component } from './fatura2/fatura2.component';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FaturaSukses2Component } from './fatura-sukses2/fatura-sukses2.component';

import { HammerModule } from '@angular/platform-browser';
import 'hammerjs';
import { CardmodalComponent } from './cardmodal/cardmodal.component';



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent,
    CardComponent,
    FaturaSuksesComponent,
    FaturaComponent,
    Fatura2Component,
    FaturaSukses2Component,
    CardmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Include FormsModule for ngModel
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HammerModule
    
    

  ],
  providers: [PurchaseCompleteGuard, {provide: MatDialogRef, useValue: {}}, {provide: MAT_DIALOG_DATA, useValue: []}],
  bootstrap: [AppComponent]
})
export class AppModule { }
