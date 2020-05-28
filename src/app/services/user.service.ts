import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ApiService } from "./api-service";

export class UserService extends ApiService {
  getPublicContent(): Observable<any> {
    return this.httpClient.get(this.getUrl("user"), { responseType: "text" });
  }
}
