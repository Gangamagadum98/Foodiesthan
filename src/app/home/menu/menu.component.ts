import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { CartService } from '../cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  starters=[]
  mainCourse=[]
  beverages=[]
  visibility
  menu=[]
  loading = true;
  

  constructor(private _service:ProductsService, private _cart:CartService, private _snackBar: MatSnackBar) { }

  addToCart(product){
    let index=this._cart.cartItems.findIndex(
      item=>item.name == product.name)
      if(index!=-1){
        
        this._cart.cartItems[index].qty++
       
       
      }
      else{
        product.qty=1
        this._cart.cartItems.push(product)
      
      }
      
      
    }
    search(searchText){
      console.log(searchText)
      this.menu=this.menu.filter
      (product=>product.name.toLowerCase().replace(/\s/g,"")
      .includes(searchText.toLowerCase().replace(/\s/g,"")))
    }

    openSnackBar(message,action) {
      this._snackBar.open(message,action, {duration:1000})
      
    }

   

 
  ngOnInit() {
    this._service.getMenuDetails().subscribe(data=>{
          // let menu=data
          // Spread operator (...)
        this.menu.push(...data[0].starter,...data[1].main,...data[2].Beverages)
        //  this.starters= menu[0].starter
        //  this.mainCourse= menu[1].main
        //  this.beverages= menu[2].Beverages
        //  console.log(this.starters)
        //  console.log(this.mainCourse)
        //  console.log(this.beverages)
        this.loading = false;
      })
     ,(err)=>{
       console.log(err)
     }
   }
 
 }
 
 
