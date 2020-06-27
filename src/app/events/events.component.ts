import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../common/services/event.service';
import { Event } from '../common/data/event';
import { ResearchComponent } from '../research/research.component';
import { ResearchLinkService } from '../common/services/research-link.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  
  listeEvents : Event[];
  research: ResearchComponent;
  constructor(private _eventService : EventService, public researchLinkService:ResearchLinkService) { 
    this.researchLinkService.listeEvents;
  }

  ngOnInit(): void{
    this.getAllEvents();
  };

   getAllEvents(): void{
    this._eventService.findAll().subscribe(
      data => {
        this.listeEvents=data,
        console.log(data)
      }, (error) => {console.log(error)}
      ); 
  } 


  
  
}