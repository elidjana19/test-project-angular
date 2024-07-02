import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  products: any[] = [];
  categoryId: number | undefined;
  category: any;
  categoryName: string = '';

  //slider
  currentPage: number = 0;
  pageSize: number = 6;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.updateCart();

    //receive categoryID from route parameters and fetch the products
    // to show products of selected category

    this.route.params.subscribe((params) => {
      this.categoryId = +params['id']; // Get the category ID from route params

      this.dataService
        .getCategoriesById(this.categoryId)
        .subscribe((category) => {
          this.category = category;
          console.log(this.category); //all the category data is an array with 1 object [0:{}]

          this.categoryName = category[0].name;
          if (this.category) {
            this.products = this.category[0].products;
            console.log(this.products);
          } else {
            console.log('error');
          }
        });
    });
  }

  // Slider
  get totalPages(): number {
    return Math.ceil(this.products.length / this.pageSize);
  }

  get visibleProducts(): any[] {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    return this.products.slice(start, end); //0-6 //7-12
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  // cart

  private updateCart() {
    this.products = this.cartService.getCart();
  }

  addToCart(product: any) {
    console.log(product);
    this.cartService.addToCart(product);
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
  }
  
  // total quantity of products in cart
  getTotalQuantity() {
    const cart = this.cartService.getCart();
    let totalQuantity = 0;

    cart.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  }
}
