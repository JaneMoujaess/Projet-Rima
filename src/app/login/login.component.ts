import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private http: HttpClient) {}

  email: string = '';
  password: string = '';

  signIn() {
    this.loginStrapi().subscribe((data: any) => {
      localStorage.setItem('token', data.jwt);
      this.router.navigateByUrl('/home');
    });
  }

  loginStrapi() {
    return this.http.post('http://localhost:1337/api/auth/local', {
      identifier: this.email,
      password: this.password,
    });
  }
}
