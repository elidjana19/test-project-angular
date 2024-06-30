import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fatura',
  templateUrl: './fatura.component.html',
  styleUrls: ['./fatura.component.css']
})
export class FaturaComponent implements OnInit {

  cart:any[]=[]
  total=0
 

  constructor( private cartService:CartService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.cart=this.cartService.getCart()
    this.total= this.cartService.totalPrice()

  }


  cancel(){
    // this.cartService.clearCart()
    this.router.navigate(['/card'])


  }


}
