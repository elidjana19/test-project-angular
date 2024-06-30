import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categories: any[] = [];

  darkTheme = false;
  themeIcon = 'bi-moon-fill';

  // filter
  filteredCategories: any[] = [];
  searchString: any;

  constructor(
    private dataService: DataService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // for initialization logic, such as fetching initial data
    //and setting up the component state.

    this.getCategories();
    this.initializeTheme();
  }

  getCategories() {
    this.dataService.getCategories().subscribe((data: any) => {
      this.categories = data;
      console.log(this.categories);

      this.filteredCategories = data; //to show all categories initially
    });
  }

  // theme switch
  switchTheme() {
    this.darkTheme = !this.darkTheme;
    this.themeIcon = this.darkTheme ? 'bi-brightness-high' : 'bi-moon-fill';
    if (this.darkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    //localStorage to save the theme state as i navigate on diff pages
    localStorage.setItem('darkTheme', JSON.stringify(this.darkTheme));
  }

  //Initialize the theme based on saved state
  initializeTheme() {
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme) {
      this.darkTheme = JSON.parse(savedTheme);
      this.themeIcon = this.darkTheme ? 'bi-brightness-high' : 'bi-moon-fill';
      if (this.darkTheme) {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    }
  }

  // filter
  filterCategories() {
    this.filteredCategories = this.categories.filter((category) =>
      category.name.toLowerCase().includes(this.searchString.toLowerCase())
    );
    console.log(this.filteredCategories);
  }

  getTotalQuantity() {
    const cart = this.cartService.getCart();
    let totalQuantity = 0;

    cart.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  }
}
