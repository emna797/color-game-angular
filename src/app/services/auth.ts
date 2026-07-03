import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  username: string = '';

  loginUser(name: string) {
    this.username = name;
  }

  logoutUser() {
    this.username = '';
  }
  isLoggedIn(): boolean {
    return this.username !== '';
  }
}
