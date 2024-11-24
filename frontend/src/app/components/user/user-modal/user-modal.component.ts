import { Component, OnInit, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.css'
})
export class UserModalComponent implements OnInit{

  firstNameCtrl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]);
  lastNameCtrl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]); 
  loginCtrl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]); 
  roleCtrl = new FormControl('', [Validators.required]);

  userForm: FormGroup = new FormGroup({
  firstName: this.firstNameCtrl,
  lastName: this.lastNameCtrl,
  login: this.loginCtrl,
  role: this.roleCtrl
  });

  @Input() user: any;

  ngOnInit(): void {
    
  }

}
