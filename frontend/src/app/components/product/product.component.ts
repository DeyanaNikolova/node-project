import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
  this.getProducts();
  }

  remove(title: string):void{
    this.productService.remove(title).subscribe(() =>{
      this.getProducts();
    });
  }

  update(product: Product){
    this.productService.update(product).subscribe(products =>{
      this.products = products;
    });
  }


  private getProducts(){
    this.productService.getProducts().subscribe(products =>{
      this.products = products;
    });
  }
}
