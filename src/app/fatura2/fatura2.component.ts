import { Component, Inject, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FaturaSukses2Component } from '../fatura-sukses2/fatura-sukses2.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fatura2',
  templateUrl: './fatura2.component.html',
  styleUrls: ['./fatura2.component.css'],

})
export class Fatura2Component implements OnInit {

  constructor(private cartService:CartService,
   private dialogRef: MatDialogRef<Fatura2Component>,
   private router: Router,
   private dialog: MatDialog,
  ) {}

  cart:any
 

  ngOnInit(): void {
    this.cart= this.cartService.getCart()
  }


  cancel(): void {
    this.dialogRef.close();
  }

  buy(): void {
    const dialogRef = this.dialog.open(FaturaSukses2Component, {
      disableClose: true,
      autoFocus: false,
    });

    this.dialogRef.close();
  }

  totalPrice(): number {
    return this.cart.reduce((total: number, item: { quantity: number; unitPrice: number; }) => total + (item.quantity * item.unitPrice), 0);
  }
}
