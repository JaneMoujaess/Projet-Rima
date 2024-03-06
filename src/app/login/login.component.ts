import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
  constructor(private router: Router) {}

  email: string = '';
  password: string = '';

  signIn() {
    //ramy implement logic
    console.log(this.email);
    console.log(this.password);
    this.router.navigateByUrl('/home');
  }
}
