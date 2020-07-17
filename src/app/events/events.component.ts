import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../common/services/event.service';
import { Event } from '../common/data/event';
import { ResearchComponent } from '../research/research.component';
import { ResearchLinkService } from '../common/services/research-link.service';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  keyWord:string;
  city:string;
  country:string;
  listeEvents : Event[];
  date:string;
  today= new Date();
  //research: ResearchComponent;
  constructor(private _eventService : EventService,/*  public researchLinkService:ResearchLinkService */) { 
    //this.researchLinkService.listeEvents;
  }

  ngOnInit(): void{
    this.formatDate(this.today)
    this.date = JSON.stringify(this.formatDate(this.today))
    this.getAllEvents();
    console.log(this.date)
  };

   getAllEvents(): void{
    this._eventService.findAll().subscribe(
      data => {
        this.listeEvents=data,
        //this.date = (this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate());
        //this.formatDate(this.today)
       /*  this.date = JSON.stringify(this.formatDate(this.today))
        console.log("++++++++++"+this.date) */
         this.listeEvents.sort(function (a:Event, b:Event) {
        //   console.log("V222222"+this.date)
          return a.dateDebut.localeCompare(b.dateDebut);
         // a.dateDebut.localeCompare(b.dateDebut); 
          //return this.listeEvents.
      //  }).filter(event => event.dateDebut > this.date);; 
      })

      }, (error) => {console.log(error)}
      ); 
  } 
   

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
/* 
afterToday(event : Event){
  //liste.forEach(element => {

    event.dateDebut > this.date;
    
  //});
}
 */



  getByCity(city:string){
    this._eventService.findByCity(this.city).subscribe(
      data => {
        this.listeEvents = data; 
      console.log(data)},
        (error) => { console.log(error)}
    )
  }
  getByCountry(country:string){
    this._eventService.findByCountry(this.country).subscribe(
      data => {
        this.listeEvents = data; 
      console.log(data)},
        (error) => { console.log(error)}
    )
  }
  getByKeyWord(keyWord:string){
    this._eventService.findByKeyWord(this.keyWord).subscribe(
      data => {
        this.listeEvents = data; 
      console.log(data)},
        (error) => { console.log(error)}
    )
  }

  treatBydate(liste:Event[]){

  }
  
}