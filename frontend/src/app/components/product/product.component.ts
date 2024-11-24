import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  titleCtrl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]);
  priceCtrl = new FormControl(0, [Validators.required]);
  amountCtrl = new FormControl(0, [Validators.required]); 

  productTitle: any;

  productForm: FormGroup = new FormGroup({
    title: this.titleCtrl,
    price: this.priceCtrl,
    amount: this.amountCtrl
  });

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

  fillForm(product: Product){
    this.titleCtrl.disable();
    this.productTitle = product.title;
    this.titleCtrl.setValue(product.title);
    this.priceCtrl.setValue(product.price);
    this.amountCtrl.setValue(product.amount);
  }

  private create(product: Product){
    this.productService.create(product).subscribe(products =>{
      this.products = products;
      this.productForm.reset();
    });
  }

  private update(product: Product){
    this.productService.update(product).subscribe(products =>{
      this.products = products;
      this.productForm.reset();
      this.productTitle = null;
      this.titleCtrl.enable();
    });
  }

  private getProducts(){
    this.productService.getProducts().subscribe(products =>{
      this.products = products;
    });
  }

  submit(){
    const value = this.productForm.value;
    // if(this.productTitle){
    //   this.update({title: this.productTitle, ...value});
    // } else{
    //   this.create(value);
    // }
    this.productService.create(value).subscribe(products =>{
      this.products = products;
    });
  }
}
