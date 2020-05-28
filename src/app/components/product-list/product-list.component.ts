import { CartService } from "./../../services/cart.service";
import { Page } from "./../../common/page";
import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/common/product";
import { ProductService } from "src/app/services/product.service";
import { ActivatedRoute } from "@angular/router";
import { CartItem } from "src/app/common/cart-item";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  page: Page;
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;
  currentCategoryName: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartSerice: CartService
  ) {
    this.page = new Page();
    this.page.size = 8;
    this.page.number = 0;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  updatePageNumber(newPageNumber: number) {
    this.page.number = newPageNumber;
    this.listProducts();
  }

  updatePageSize(newPageSize: number) {
    this.page.size = newPageSize;
    this.listProducts();
  }

  addToCart(product: Product) {
    this.cartSerice.addToCart(new CartItem(product));
  }

  public listProducts() {
    const searchProduct: Product = this.filterRouteParametersToProduct();

    if (this.currentCategoryId != this.previousCategoryId) {
      this.page.number = 0;
    }

    this.previousCategoryId = this.currentCategoryId;

    this.handleListProduct(searchProduct);
  }

  private filterRouteParametersToProduct(): Product {
    let searchProduct: Product = new Product();
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has("id");
    const hasSearchKeyword: boolean = this.route.snapshot.paramMap.has(
      "keyword"
    );

    if (hasSearchKeyword) {
      const keyword = this.route.snapshot.paramMap.get("keyword");
      searchProduct.name = keyword;
    } else if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get("id");
      this.currentCategoryName = this.route.snapshot.paramMap.get("name");
      searchProduct.categoryId = this.currentCategoryId;
    }
    return searchProduct;
  }

  private handleListProduct(searchProduct: Product) {
    this.productService
      .getProducts(this.page, searchProduct)
      .subscribe(this.processResult());
  }

  private processResult() {
    return (data) => {
      this.products = data.content;
      this.page = data.page;
    };
  }
}
