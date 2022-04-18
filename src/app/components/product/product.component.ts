import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../../models/product.model'

@Component({
  selector: 'servicios-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product:Product = {
    id: '',
    title: '',
    price: 0,
    image: '',
    description: '',
    category: ''
  };

  @Output() addedProduct = new EventEmitter<Product>();

  constructor() { }

  onAddToCard(){
    this.addedProduct.emit(this.product);
  }
}
