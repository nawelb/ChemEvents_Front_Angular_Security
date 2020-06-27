import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventService } from '../common/services/event.service';
import { Event } from '../common/data/event';
import { ResearchLinkService } from '../common/services/research-link.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
  
  city:string;

  listeEvents : Event[];

    
  constructor( private _eventService : EventService) { }

  ngOnInit(): void {
  }

  
  getByCity(city:string){
    this._eventService.findByCity(this.city).subscribe(
      data => {
        this.listeEvents = data; 
      console.log(data)},
        (error) => { console.log(error)}
    )
  }
}
