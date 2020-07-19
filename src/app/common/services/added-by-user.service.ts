import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddedByUser } from '../data/addedbyuser';

@Injectable({
  providedIn: 'root'
})
export class AddedByUserService {
  baseUrl: string = "http://localhost:8886"

  urlAdd: string = "/addedByUser/ajouterEvent"
  urlFindAll: string = "/addedByUser/findAllSaved"
  urlFindByUsername: string = "/addedByUser/findAllByUser"
  urlFindByEvent: string = "/addedByUser/findAllByEvent"
  urlDeleteByEvent: string = "/addedByUser/DeleteUserEvent"


  constructor(private _http: HttpClient) { }

  addAddedByUser(addedByUSer) {
    return this._http.post(this.baseUrl + this.urlAdd, addedByUSer, { responseType: 'text' as 'json' })
  }
  findAll(): Observable<AddedByUser[]> {
    return this._http.get<AddedByUser[]>(this.baseUrl + this.urlFindAll);
  }

  findByUsername(username: string): Observable<AddedByUser[]> {
    return this._http.get<AddedByUser[]>(this.baseUrl + this.urlFindByUsername + "/" + username);
  }
  findByEvent(event: string): Observable<AddedByUser> {
    return this._http.get<AddedByUser>(this.baseUrl + this.urlFindByEvent + "/" + event);
  }

  deleteByEvent(event: string): Observable<AddedByUser> {
    return this._http.delete<AddedByUser>(this.baseUrl + this.urlDeleteByEvent + "/" + event)
  }
}
