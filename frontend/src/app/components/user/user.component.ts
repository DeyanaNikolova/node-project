import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from './user-modal/user-modal.component';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{



  users: any[] = [];
  //userLogin = '';

  constructor(private userService: UserService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getUsers();
  }

  openModal(user?: User){
     const modalRef = this.modalService.open(UserModalComponent);
   // modalRef.componentInstance.user = user;

    modalRef.result
    .then(result => {
      console.log(result);
      
      if(result){
        if(result.id){
          this.update(result);
        } else {
          this.create(result);
        }
      }
    })
    .catch();
  }


 fillForm(user: User){
  //   this.loginCtrl.disable();
  //   this.userLogin = user.login;
  //   this.firstNameCtrl.setValue(user.firstName);
  //   this.lastNameCtrl.setValue(user.lastName);
  //   this.roleCtrl.setValue(user.role);
   }

  remove(login: string):void{
    this.userService.remove(login).subscribe(() =>{
      this.getUsers();
    });
  }

  private create(user: User){
    this.userService.create(user).subscribe(users =>{
      this.users = users;
    });
  }

  private update(user: User){
    this.userService.update(user).subscribe(users =>{
      this.users = users;
    //  this.userLogin = '';
    });
  }

 private getUsers(){
    this.userService.getUsers().subscribe(users =>{
      this.users = users;
    });
  }
}
