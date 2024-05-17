import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.baseUrl;
  private http: HttpClient = inject(HttpClient);

  registerUser(user: User){
    console.log(this.baseUrl);
    return this.http.post<User>(`${this.baseUrl}/register`, user);
  }

}

