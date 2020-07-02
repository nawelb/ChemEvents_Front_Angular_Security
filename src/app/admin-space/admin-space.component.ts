import { Component, OnInit } from '@angular/core';
import { EventService } from '../common/services/event.service';
import { Event } from '../common/data/event';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import { Session } from 'protractor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-space',
  templateUrl: './admin-space.component.html',
  styleUrls: ['./admin-space.component.scss'], 
  animations:[

    trigger('myAnimation', [
      state('small', style({'height':'0px'})),
      state('large', style({'height':'700px'})),

      transition('small <=> large',animate('400ms ease-in'))
    ])
  ]
})
export class AdminSpaceComponent implements OnInit {
  event:Event;
  state:string="small";
  listeEvents:Event[];
  public isCollapsed = false;

  tableHeaders = ["title1", "title2", "img1", "img2", 
    "description", "date", "dateDebut", "dateFin", "lieu",
    "city", "country", "email", "siteWeb", "tags", 
    "submitAbstract", "register"];

  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    this.getAllEvents();
  }


  getAllEvents(): void{
    this.eventService.findAll().subscribe(
      data => {
        this.listeEvents=data,
        console.log(data)
      }, (error) => {console.log(error)}
      ); 
  }

openDivUpdate():void{
  this.state =(this.state ==="small" ? 'large' : 'small');

}

 updateEvent(eventCatch:Event):void {
  //this.getById();
  /*  console.log(event._id);
   sessionStorage.setItem("titre1", event.title1);
   sessionStorage.setItem("titre2", event.title2);  
   
  }

getById():Observable<Event>{
  this.event=this.eventService.findById();
  return  event; 
} */

}
}