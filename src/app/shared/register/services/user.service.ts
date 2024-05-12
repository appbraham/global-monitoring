import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.baseUrl;
  private http: HttpClient = inject(HttpClient);

  registerUser(user: User){

    const headers = new HttpHeaders()
      .set('email', user.email)
      .set('password', user.password);

    return this.http.post<User>(`${this.baseUrl}/register`, { headers });
  }

}

