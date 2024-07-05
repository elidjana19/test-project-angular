import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CartService } from '../services/cart-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fatura-sukses2',
  templateUrl: './fatura-sukses2.component.html',
  styleUrls: ['./fatura-sukses2.component.css']
})
export class FaturaSukses2Component implements OnInit {

  constructor(private dialogRef: MatDialogRef<FaturaSukses2Component>,
    private dialog: MatDialog, private cartService:CartService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  close() {
      this.cartService.clearCart();
      this.router.navigate(['/home']);
      this.dialogRef.close();
    }
    
  
}
