import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fatura-sukses',
  templateUrl: './fatura-sukses.component.html',
  styleUrls: ['./fatura-sukses.component.css'],
})
export class FaturaSuksesComponent implements OnInit {
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {}

  close() {
    this.cartService.clearCart();
    this.router.navigate(['/home']);
  }
}
