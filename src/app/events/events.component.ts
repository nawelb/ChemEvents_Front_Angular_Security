import { Component, OnInit } from '@angular/core';
import { EventService } from '../common/services/event.service';
import { Event } from '../common/data/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  listeEvents : Event[];
  
  constructor(private _eventService : EventService) { }

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents(): void{
    this._eventService.findAll().subscribe(
      data => {
        this.listeEvents=data,
        console.log(data)
      }, (error) => {console.log(error)}
      ); 
  }

}
