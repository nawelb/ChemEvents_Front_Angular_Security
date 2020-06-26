import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../common/services/authentication.service';
import { SignUp } from '../common/data/SignUp';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form:any ={};
  signUp : SignUp;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private _authenticationService : AuthenticationService) { }

  ngOnInit(): void {
  }

  onSignUp(){
    this.signUp=new SignUp(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password
    );
    this._authenticationService.signUp(this.signUp).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
