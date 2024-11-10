import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ConnectionService } from '../../services/connection.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


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
    private router: Router,
    private authService: AuthService,
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
          this.authService.setAuthConf(res);
          this.router.navigate(['/products']);
        }
      },
      error: err =>{
        this.authService.setAuthConf({userId: 0, isAuthenticated: false});
        console.log(err);
      }
    });
  }
}
