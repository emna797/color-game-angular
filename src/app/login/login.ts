import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Navbar } from '../navbar/navbar';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,

  imports: [CommonModule, FormsModule, Navbar],

  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';

  usernameError = '';
  passwordError = '';
  loginError = '';

  constructor(
    private authService: Auth,
    private router: Router,
  ) {}

  login() {
    // Réinitialisation des erreurs

    this.usernameError = '';
    this.passwordError = '';
    this.loginError = '';

    // Vérification Username

    if (this.username.trim() === '') {
      this.usernameError = '* Username obligatoire';
    } else if (this.username.length <= 6) {
      this.usernameError = '* Username doit contenir plus de 6 caractères';
    }

    // Vérification Password

    if (this.password.trim() === '') {
      this.passwordError = '* Password obligatoire';
    } else if (this.password.length <= 5) {
      this.passwordError = '* Password doit contenir plus de 5 caractères';
    }

    // Arrêt si erreur

    if (this.usernameError !== '' || this.passwordError !== '') {
      return;
    }

    // Connexion réussie

    console.log('Connexion réussie');

    this.authService.loginUser(this.username);

    this.router.navigate(['/home']);
  }
}
