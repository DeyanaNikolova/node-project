import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // isConnectionPage = false;

  constructor(private router: Router, private authService: AuthService) {}

  logout() {
    this.authService.setAuthConf({
      userId: 0,
      isAuthenticated: false,
      isAdmin: false,
    });
    this.router.navigate(['/connection']);
  }

  login() {
    this.authService.setAuthConf({
      userId: 0,
      isAuthenticated: false,
      isAdmin: false,
    });
    this.router.navigate(['/connection']);
  }

  userProfile() {
    this.router.navigate(['/user-profile']);
  }

  get isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  get isAdmin() {
    return this.authService.isAdmin();
  }
}
