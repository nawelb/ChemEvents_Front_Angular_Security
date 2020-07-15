import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignIn } from '../data/signIn';
import { LoginResponse } from '../data/loginResponse';
import { SignUp } from '../data/signUp';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private baseUrl: string = environment.urlSecurity;
  //private baseUrl = "https://prod-chem-eventz-spring-securi.herokuapp.com"
  private loginUrl = this.baseUrl+'/api/auth/signin';
  private signupUrl = this.baseUrl+'/api/auth/signup';

  constructor(private http: HttpClient) { }

  attemptAuth(credentials: SignIn): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUp): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
