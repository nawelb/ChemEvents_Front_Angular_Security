import { Component, OnInit } from '@angular/core';
import { EventService } from '../common/services/event.service';
import { Event } from '../common/data/event';

@Component({
  selector: 'app-admin-space',
  templateUrl: './admin-space.component.html',
  styleUrls: ['./admin-space.component.scss']
})
export class AdminSpaceComponent implements OnInit {
  
  listeEvents:Event[];

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



}
