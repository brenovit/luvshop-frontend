import { Router } from "@angular/router";
import { ProductService } from "src/app/services/product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-search",
  templateUrl: "./product-search.component.html",
  styleUrls: ["./product-search.component.css"]
})
export class ProductSearchComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  searchProdutWithName(name) {
    if (name) {
      this.router.navigateByUrl(`/search/${name}`);
    } else {
      this.router.navigateByUrl(`/products`);
    }
  }
}
