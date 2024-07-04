import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-fatura2',
  templateUrl: './fatura2.component.html',
  styleUrls: ['./fatura2.component.css']
})
export class Fatura2Component implements OnInit {

  constructor(private cartService:CartService,
    private dialogRef: MatDialogRef<Fatura2Component>
  ) {}

  cart:any

  ngOnInit(): void {
    this.cart= this.cartService.getCart()
  }


  cancel(){
    this.dialogRef.close()
    this.cart=[]
  }



}
