import { Product } from "../../common/product";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-list-item",
  templateUrl: "./product-list-item.component.html",
  styleUrls: ["./product-list-item.component.css"],
})
export class ProductListItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addProductToCart: EventEmitter<Product> = new EventEmitter<
    Product
  >();
  constructor() {}

  ngOnInit() {}

  addToCart(product: Product) {
    this.addProductToCart.emit(product);
  }
}
