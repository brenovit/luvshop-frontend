import { ProductCategoryService } from "./../../services/product-category.service";
import { ProductCategory } from "./../../common/product-category";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-category",
  templateUrl: "./product-category.component.html",
  styleUrls: ["./product-category.component.css"]
})
export class ProductCategoryComponent implements OnInit {
  productCategories: ProductCategory[];

  constructor(private productCategoryService: ProductCategoryService) {}

  ngOnInit() {
    this.listProductCategory();
  }

  private listProductCategory() {
    this.productCategoryService
      .getProductsCategories()
      .subscribe(data => (this.productCategories = data));
  }
}
