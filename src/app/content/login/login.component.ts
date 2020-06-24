import { Component, OnInit } from '@angular/core';
import { LoginResponse } from 'src/app/common/data/loginResponse';
import { Login } from 'src/app/common/data/login';
import { LoginService } from 'src/app/common/services/login.service';
import { SignIn } from 'src/app/common/data/signIn';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { TokenStorageService } from 'src/app/common/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private signIn: SignIn;

  constructor(private authenticationService: AuthenticationService, private tokenStorage: TokenStorageService) { }
  
  ngOnInit(){
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = false;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onLogin(){
    console.log(this.form);

    this.signIn = new SignIn(
      this.form.username,
      this.form.password);

    this.authenticationService.attemptAuth(this.signIn).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    ); 
  }

  reloadPage() {
    window.location.reload();
  }
  
}