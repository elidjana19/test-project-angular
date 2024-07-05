import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service';

import { Router } from '@angular/router';

import { slideFromBottomAnimation } from '../animation';

import { filter } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Fatura2Component } from '../fatura2/fatura2.component';
import { FaturaSukses2Component } from '../fatura-sukses2/fatura-sukses2.component';


@Component({
  selector: 'app-cardmodal',
  templateUrl: './cardmodal.component.html',
  styleUrls: ['./cardmodal.component.css']
})
export class CardmodalComponent implements OnInit {
  cart:any[]=[]
  total:any=0
  totalProductsNumber:any=0

  fileNameDialogRef!: MatDialogRef<CardmodalComponent>;

  constructor(private cartService:CartService,
    private router:Router,
    public dialog:MatDialog, 
    private dialogRef: MatDialogRef<CardmodalComponent>,
    private faturaSuksesRef:MatDialogRef<FaturaSukses2Component>
  ) { }

  ngOnInit(): void {

    this.cart=this.cartService.getCart()
    this.total=Number(this.cartService.totalPrice())

    console.log(this.cart + "cartttt")
    console.log(this.total)
  }

  incrementQuantity(id:number){
    this.cartService.incrementQuantity(id)

    this.total=Number(this.cartService.totalPrice())
    this.totalProductsNumber++
  
  }
  decrementQuantity(id:number){
    this.cartService.decrementQuantity(id)

    this.total=Number(this.cartService.totalPrice())
   
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    this.cart = this.cartService.getCart(); // Update cart after removal

    this.total=Number(this.cartService.totalPrice())
   
  }

  removeTheProductTotally(product:any){
    this.cartService.removeTheProductTotally(product)
    this.cart=this.cartService.getCart()
  }


  // IS OK 
  clearCart() {
    this.cartService.clearCart();
    this.cart=[]
    this.totalProductsNumber=0
    this.dialogRef.close(); 
}

//IS OK
continueBuying(){
  this.router.navigate(['/home'])
  this.dialogRef.close(); 
}


openFaturaSukses() {
  
   this.dialog.open(FaturaSukses2Component, {
   panelClass: 'custom-dialog-container',
   disableClose: true,
  });
  this.dialogRef.close();
}


}
