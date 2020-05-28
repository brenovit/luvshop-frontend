import { CartService } from "./../../services/cart.service";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/common/product";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { CartItem } from "src/app/common/cart-item";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.loadProduct();
    });
  }

  addToCart() {
    this.cartService.addToCart(new CartItem(this.product));
  }

  private loadProduct() {
    if (this.route.snapshot.paramMap.has("id")) {
      const productId: number = +this.route.snapshot.paramMap.get("id");
      this.productService
        .getProduct(productId)
        .subscribe((data) => (this.product = data));
    }
  }
}
