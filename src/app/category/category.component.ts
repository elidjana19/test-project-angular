import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart-service';
import { trigger, style, animate, transition } from '@angular/animations';
import { CardmodalComponent } from '../cardmodal/cardmodal.component';
import { filter } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})

export class CategoryComponent implements OnInit, AfterViewInit {


  products: any[] = [];
  categoryId: number | undefined;
  category: any;
  categoryName: string = '';

  //slider
  currentPage: number = 0;
  pageSize: number = 6;


  private touchStartX: number = 0;
  private touchEndX: number = 0;
  private touchThreshold: number = 50;

  // fileNameDialogRef!: MatDialogRef<CardmodalComponent>;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private cartService: CartService, 
    public dialog:MatDialog
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

  ngAfterViewInit(): void {
  
  }



  // Slider


  onTouchStart(event: TouchEvent) {
    console.log("Touch Start X:");
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.touches[0].clientX;
    console.log("Touch End X:", this.touchEndX);

  }

  onTouchEnd(event: TouchEvent) {
    const diff = this.touchStartX - this.touchEndX;
    console.log("Touch Difference:", diff);
    if (diff > this.touchThreshold) {
      this.nextPage();
    } else if (diff < -this.touchThreshold) {
      this.previousPage();
    }
    this.touchStartX = 0;
    this.touchEndX = 0;

    console.log("start")
  }


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




  openCardModal() {
    this.dialog.open(CardmodalComponent,{
      disableClose: true,
    })
  }
}
