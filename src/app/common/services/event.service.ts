import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../data/event';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  baseUrl: string = environment.urlEvent;

  //baseUrl: string ="https://prod-chem-eventz-spring-events.herokuapp.com/";
  //baseUrl: string ="http://localhost:8887/";
  urlFindAll: string ="event-api/public/events"
  urlFindResearch: string ="event-api/public/event"
  urlAddEvent: string ="event-api/private/event"
  urlUpdateEvent:string="event-api/private/admin/event"
  
  constructor(private _http: HttpClient) { }


  findAll() : Observable<Event[]>{
      return this._http.get<Event[]>(this.baseUrl+this.urlFindAll); 
   } 

   findByCity(city:string) : Observable<Event[]>{
    return this._http.get<Event[]>(this.baseUrl+this.urlFindResearch+"?city="+city); 
   }

  findByCountry(country:string) : Observable<Event[]>{
    return this._http.get<Event[]>(this.baseUrl+this.urlFindResearch+"?country="+country); 
  }

  findByKeyWord(keyWord:string) : Observable<Event[]>{
    return this._http.get<Event[]>(this.baseUrl+this.urlFindResearch+"?research="+keyWord); 
  }
  
  addNewEvent(event) {
    return this._http.post(this.baseUrl+this.urlAddEvent, event, {responseType:'text' as 'json'})
  }
  
  updateEvent(event)  {
    return this._http.put(this.baseUrl+this.urlUpdateEvent, event, {responseType:'text' as 'json'})
  }
  
  deleteEvent(_id:string) : Observable<Event> {
    return this._http.delete<Event>(this.baseUrl+this.urlUpdateEvent+"/"+_id)
  }

  findById(_id:string) : Observable<Event>{
    return this._http.get<Event>(this.baseUrl+this.urlFindResearch+"/"+_id); 
  }


  
}

