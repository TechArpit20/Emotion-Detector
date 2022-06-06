import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private service : ApiService, private http: HttpClient) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    // localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['login']);
  }

  login(result:{"id":string,"name":string,"username":string,"role":string}) {
    this.setToken('asderghjuytrewqasxcvbnmklpoiuyt');
    localStorage.setItem('id', result.id);
    localStorage.setItem('name', result.name);
    localStorage.setItem('username', result.username);
    localStorage.setItem('role',result.role);
  }

 
}
