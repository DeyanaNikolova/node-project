import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ConnectionService } from './connection.service';
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
    this.connectionService.login(value).subscribe(res =>{
      console.log(res); 

      if(res.success){
        this.router.navigate(['/products']);
      }
    });
  }
}