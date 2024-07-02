import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:any[]=[]


  addToCart(product: any) {
    let item = this.cart.find(i => i.id === product.id); //if item exists
    if (item) {
      item.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    console.log(this.cart);
  }

  removeFromCart(product: any) {
    let item = this.cart.find(i => i.id === product.id);
    if (item && item.quantity > 1) {
      item.quantity--;
    } else {
      this.cart = this.cart.filter(i => i.id !== product.id); //remove from cart
    }
    console.log(this.cart);
  }

  removeTheProductTotally(product:any){
    this.cart=this.cart.filter(item=> item.id !== product.id)
    console.log(this.cart)
  }

  incrementQuantity(id:number){
  let item= this.cart.find(i=> i.id === id)  //find the item with this id
  if(item){  
    item.quantity++
  }
  }

decrementQuantity(id:number){
    let item= this.cart.find(i=> i.id === id)
    if(item && item.quantity>0){
      item.quantity--
    }
  }


  totalPrice() {
    return this.cart.reduce((total, item) => {
      if (typeof item.unitPrice !== 'number' || typeof item.quantity !== 'number') {
        console.error('Invalid price or quantity', item);
        return total;
      }
      return total + (item.unitPrice * item.quantity);
    }, 0);
  }

  clearCart(){
    this.cart=[]
  }


  getCart(){
    return this.cart
    
  }


  constructor() { }
}
