import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http : HttpClient) { }

  getUserAwaitingApplications() : Observable<any>{
    return this.http.get(`http://localhost:1337/api/applications?populate[program]=*&populate[grades]=*&populate[motivation_letter]=*&populate[recommendation_letter]=*&filters[users_permissions_user][id][$eq]=${this.decodeToken().id}`);
  }

  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Decode JWT to get its payload
  decodeToken(): any {
    const token = this.getToken();
    return token ? jwtDecode(token) : null;
  }
}

