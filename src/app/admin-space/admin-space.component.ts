import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../common/services/event.service';
import { Event } from '../common/data/event';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import { Session } from 'protractor';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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
  @Input() event:Event;
  state:string="small";
  listeEvents:Event[];
  eventId:string;
  public isCollapsed = false;

  tableHeaders = ["title1", "title2", "img1", "img2", 
    "description", "date", "dateDebut", "dateFin", "lieu",
    "city", "country", "email", "siteWeb", "tags", 
    "submitAbstract", "register"];
  selectedEventEmployeId: number;

  constructor(private eventService:EventService, private _route: ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    this.getAllEvents();
    this.selectedEventEmployeId = +this._route.snapshot.paramMap.get('_id');
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

editEvent(event){
  this.eventId =event._id;
  sessionStorage.setItem("_id", this.eventId);
  this._router.navigate(['/updateEvent', this.eventId]);
}

deleteEvent(event){
  this.eventId =event._id;
  delete(this.eventId);
}


}