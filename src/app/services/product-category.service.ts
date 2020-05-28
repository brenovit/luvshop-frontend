import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { ProductCategory } from "../common/product-category";
import { ApiService } from "./api-service";

export class ProductCategoryService extends ApiService {
  getProductsCategories(): Observable<ProductCategory[]> {
    return this.httpClient
      .get<ProductCategory[]>(this.getUrl(`v1/product-categories`))
      .pipe(map(response => response));
  }
}
