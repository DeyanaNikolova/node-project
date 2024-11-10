import { Injectable } from '@angular/core';
import { AuthConf } from '../models/auth-conf.model';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setAuthConf(authConf: AuthConf){
    sessionStorage.setItem('userId', authConf.userId + '');
    sessionStorage.setItem('isAuthenticated', authConf.isAuthenticated + '');
    sessionStorage.setItem('isAdmin', authConf.isAdmin + '');
  }

  getUserId(): number{
    return Number(sessionStorage.getItem('userId'));
  }

  isAuthenticated(): boolean{
    return sessionStorage.getItem('isAuthenticated') === 'true';
  }

  isAdmin(): boolean{
    return sessionStorage.getItem('isAdmin') === 'true';
  }
}
