import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from './services/cart-service';

@Injectable({
  providedIn: 'root'
})
export class PurchaseCompleteGuard implements CanActivate {
  private isPurchaseComplete: boolean = false;


 


  constructor(private router: Router, private cartService:CartService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const routePath = state.url;

    // Check if purchase is complete
    if (this.cartService.getCart().length>0) {
      return true; 
    } else {
      this.router.navigate(['/home']); 
      return false; 
    }
  }
  
}
