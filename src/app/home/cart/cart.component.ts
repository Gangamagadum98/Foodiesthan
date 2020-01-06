import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items=[]
  total=0
  
  test = []

 
  constructor(private _cart:CartService, private _router:Router) { }
  

  pay()
  {
    this._router.navigate(["home/payment"])
    
  }


  // calculateTotal(){
  //   this.total = this._service.cartItems
  //   .reduce((acc,item)=>acc+(item.price*item.qty),0)

  // }

  calculateTotal(){
    this.total = 0
    this.items.forEach(item=>{
      this.total += item.qty * item.price
    })
    // this.total=this.items.reduce((acc,item)=> {
    //   console.log(acc)
    //   console.log(item)
    //   return item.qty * item.price
    // })
  }

  ngOnInit() {
   console.log(this._cart.cartItems)
   this.items= this._cart.cartItems
   this.calculateTotal()
  //  console.log(this.total)
  // console.log(this._cart.cartItems)
  
  }

  remove(item){
    this._cart.cartItems.splice(this._cart.cartItems.indexOf(item),1)
    this.calculateTotal()
    
    //this.total=this.total-item.price

  }

  increase(product){
    product.qty++
    //this._cart.cartItems.findIndex(item=>item.name==product).qty++
    this.calculateTotal()
   }
   decrease(product){
     if(product.qty == 1){
       this.remove(product)
     }
     else{
       product.qty--
       this.calculateTotal()
     }
   }
  
  //  quantity(){
    // console.log(this.quant=quant)
    // console.log( product.qty+=this.item.qty)
    // this.calculateTotal()
      // this.items.forEach(item => {
      //   this.total += parseFloat(item.qty)
      // });
  //  }

   onBlurMethod(){
    this.calculateTotal()
   }

}
