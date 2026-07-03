import { Routes } from '@angular/router';
import { ColorGame } from './color-game/color-game';
import { Home } from './home/home';
import { Login } from './login/login';

export const routes: Routes = [
  // Redirection par défaut vers la page Login
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  // Définition des routes de l'application
  { path: 'login', title: 'Login', component: Login },
  { path: 'home', title: 'Home', component: Home },
  { path: 'color-game', title: 'Color Game', component: ColorGame }, // Route mise à jour vers color-game
];
