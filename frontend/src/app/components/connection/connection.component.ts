import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ConnectionService } from '../../services/connection.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-connection',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.css'
})
export class ConnectionComponent {

  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) {}
  connectionForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  submit(){
    const value: any  = this.connectionForm.value;
    console.log(value);
    this.connectionService.login(value).subscribe({
      next: res =>{
        if(res.isAuthenticated){
          sessionStorage.setItem('userId', res.userId);
          sessionStorage.setItem('isAuthenticated', res.isAuthenticated);
          this.router.navigate(['/products']);
        }
      },
      error: err =>{
        sessionStorage.setItem('userId', '');
        sessionStorage.setItem('isAuthenticated', 'false');
        console.log(err);
      }
    });
  }
}
