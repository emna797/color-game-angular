import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router'; 
import { Auth } from '../services/auth'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  

  constructor(public authService: Auth, private router: Router) {}
  logout() {
    
    const confirmation = confirm('Voulez-vous vraiment vous déconnecter ?');
    
    if (confirmation) {
      this.authService.logoutUser();
      this.router.navigate(['/login']);
    }
    
  }
}
