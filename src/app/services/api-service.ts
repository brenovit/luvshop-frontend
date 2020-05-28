import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export abstract class ApiService {
  private baseUrl = "http://localhost:8181/ecommerce/api/";

  constructor(protected httpClient: HttpClient) {}

  protected getUrl(endpoint) {
    return `${this.baseUrl}${endpoint}`;
  }
}
