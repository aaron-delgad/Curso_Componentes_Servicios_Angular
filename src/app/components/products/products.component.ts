import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'servicios-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total= 0;
  Product: Product[] = [];
  today = new Date();
  otrafecha = new Date(2022,2,22);

  constructor(
    private storeService: StoreService,
    private productsService:ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCard();
   }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.Product = data;
    });
  }


    // id: '1',
    // name: 'El mejor juguete',
    // price: 565,
    // image: './assets/imagenes/juguete.jpeg'
    //   },
    //   {
    // id: '2',
    // name: 'Bicicleta casi nueva',
    // price: 356,
    // image: './assets/imagenes/bicicletas.jpg'
    //   },
    //   {
    // id: '3',
    // name: 'Colección de albunes',
    // price: 34,
    // image: './assets/imagenes/albun.jpg'
    //   },
    //   {
    // id: '4',
    // name: 'Mis Libros',
    // price: 23,
    // image: './assets/imagenes/libros.jpg'
    //   },
    //   {
    // id: '5',
    // name: 'Casa de perros',
    // price: 34,
    // image: './assets/imagenes/casa_perro.jpg'
    //   },
    //   {
    // id: '6',
    // name: 'Gafas',
    // price: 3434,
    // image: './assets/imagenes/glasses.jpg'
    //   }];

      onAddToShoppingCart(product:Product){
        this.storeService.addProduct(product);
        this.total = this.storeService.getTotal();
      }

}
