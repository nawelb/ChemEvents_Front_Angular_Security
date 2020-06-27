import { Injectable, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { Event } from '../data/event';
@Injectable({
  providedIn: 'root'
})
export class ResearchLinkService implements OnInit{
  

  listeEvents:Event[];


  constructor(  private _eventService : EventService  ) { }
  ngOnInit(): void {
  }
  
  getEventsResearch(): Event[] {
    return this.listeEvents;
}
}
