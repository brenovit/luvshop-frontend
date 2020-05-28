import { Credential } from "./../common/credential";
import { User } from "./../common/user";
import { Observable } from "rxjs";
import { ApiService } from "./api-service";

export class AuthService extends ApiService {
  login(credential: Credential): Observable<any> {
    return this.httpClient.post(this.getUrl("auth/signin"), credential);
  }

  register(user: User): Observable<any> {
    return this.httpClient.post(this.getUrl("auth/signup"), user);
  }
}
