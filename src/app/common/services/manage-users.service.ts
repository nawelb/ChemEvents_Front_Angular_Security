import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../data/user';

@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {

 baseUrl: string = environment.urlSecurity;
  //baseUrl: string = "http://localhost:8888";
  private allUsers = "/admin/findUsers";
  private deleteUser ='/admin/deleteUser';
  constructor(private _http: HttpClient) { }


  findAll() : Observable<User[]>{
    return this._http.get<User[]>(this.baseUrl+this.allUsers, { responseType: 'json' }); 
 } 

 deleteEvent(username:string) : Observable<User> {
  return this._http.delete<User>(this.baseUrl+this.deleteUser+"/"+username)
}

}
