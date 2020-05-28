import { User } from "./../common/user";
import { ApiService } from "./api-service";

const TOKEN_KEY = "auth-token";
const USER_KEY = "auth-user";

export class TokenStorageService {
  constructor() {}

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.saveItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: User) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): User {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
}
