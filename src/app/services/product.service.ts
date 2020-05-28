import { ProductList } from "./../common/product-list";
import { Page } from "./../common/page";
import { Observable } from "rxjs";
import { Product } from "../common/product";
import { map } from "rxjs/operators";
import { ApiService } from "./api-service";

export class ProductService extends ApiService {
  getProducts(page: Page, search: Product): Observable<ProductList> {
    let searchParameterName = "";
    let searchParameterCategoryId = "";
    if (search.name) {
      searchParameterName = `&name=${search.name}`;
    }
    if (search.categoryId) {
      searchParameterCategoryId = `&categoryId=${search.categoryId}`;
    }

    return this.httpClient
      .get<GetProductsResponse>(
        this.getUrl(
          `v1/products?page=${page.number}&size=${page.size}${searchParameterName}${searchParameterCategoryId}`
        )
      )
      .pipe(map(response => response));
  }

  getProduct(productId: number): Observable<Product> {
    return this.httpClient
      .get<Product>(this.getUrl(`v1/products/${productId}`))
      .pipe(map(response => response));
  }
}

interface GetProductsResponse {
  content: Product[];
  page: Page;
}
