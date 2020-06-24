import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../data/event';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseUrl: string ="http://localhost:8887/"
  urlFindAll: string ="event-api/public/events"

  constructor(private _http: HttpClient) { }


  findAll() : Observable<Event[]>{
      return this._http.get<Event[]>("http://localhost:8887/event-api/public/events"); 

   } 
  
}

