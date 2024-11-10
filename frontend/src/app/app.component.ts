import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule,NgIf } from '@angular/common';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  // isConnectionPage = false;

constructor(
  private router: Router,
  private authService: AuthService,
) {}

ngOnInit(): void {
  // this.router.events.subscribe((res: any) =>{

  //   if(res && res.url){
  //     this.isConnectionPage = res.url.endsWith('connection');
  //   }
  // });
}

userProfile(){
  this.router.navigate(['/user-profile']);
}

  login(){
    this.authService.setAuthConf({userId: 0, isAuthenticated: false, isAdmin: false });
    this.router.navigate(['/connection']);
  }

  logout(){
    this.authService.setAuthConf({userId: 0, isAuthenticated: false, isAdmin: false});
    this.router.navigate(['/connection']);
  }

  get isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  get isAdmin(){
    return this.authService.isAdmin();
  }
}
