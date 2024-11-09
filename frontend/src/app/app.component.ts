import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

constructor(private router: Router) {

}

  login(){
    sessionStorage.setItem('isAuthenticated', 'false');
    sessionStorage.setItem('userId', '');
    this.router.navigate(['/connection']);
  }

  logout(){
    sessionStorage.setItem('isAuthenticated', 'false');
    sessionStorage.setItem('userId', '');
    this.router.navigate(['/connection']);
  }

  isAuthenticated(){
    return sessionStorage.getItem('isAuthenticated') === 'true';
  }
}
