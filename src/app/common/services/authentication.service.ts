import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignIn } from '../data/signIn';
import { LoginResponse } from '../data/loginResponse';
import { SignUp } from '../data/signUp';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginUrl = 'http://localhost:8888/api/auth/signin';
  private signupUrl = 'http://localhost:8888/api/auth/signup';

  constructor(private http: HttpClient) { }

  attemptAuth(credentials: SignIn): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUp): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
