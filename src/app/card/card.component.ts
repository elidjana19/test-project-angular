import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service';

import { Router } from '@angular/router';

import { slideFromBottomAnimation } from '../animation';

import { MatDialog, MatDialogRef } from '@angular/material';
import { Fatura2Component } from '../fatura2/fatura2.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [slideFromBottomAnimation]
})
export class CardComponent implements OnInit {

  cart:any[]=[]
  total:any=0
  totalProductsNumber:any=0

  fileNameDialogRef!: MatDialogRef<Fatura2Component>;

  constructor(private cartService:CartService,
    private router:Router,
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {

    this.cart=this.cartService.getCart()
    this.total=Number(this.cartService.totalPrice())


  

    console.log(this.cart + "cartttt")
    console.log(this.total)
  }


  openFatura() {
    this.fileNameDialogRef = this.dialog.open(Fatura2Component);

    this.fileNameDialogRef.afterClosed().pipe(
      filter(name => name)
    ).subscribe(name => {
      console.log("hdhdhdhdhhd")
    })
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

  clearCart() {
    this.cartService.clearCart();
    this.cart=[]
    this.totalProductsNumber=0
    
}




navigateToFatura(){
  this.router.navigate(['/fatura'])
}
}
