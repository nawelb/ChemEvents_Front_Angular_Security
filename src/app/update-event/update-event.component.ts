import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../common/services/event.service';
import { Event } from '../common/data/event';
import { ObservableInput, Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})

export class UpdateEventComponent implements OnInit {
  form:any;
  private evenement:Event;
  newEvent:Event;
  //event:any;

  _id=sessionStorage.getItem('_id');
  constructor( private _route:ActivatedRoute, private _eventService:EventService) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(parameterMap => {
      parameterMap.get('_id');
      console.log("SessionStorage = " + sessionStorage.getItem('_id'));
      console.log("_id NgOnInit "+this._id);
      this.getEvent(this._id);
    //  console.log("event ngOnInit: "+this.evenement._id)
    })
  }

private getEvent(_id:string){
 return this._eventService.findById(_id).subscribe(
    data => {
      this.form=data;
     
      console.log("data "+this.form.title1)

      this.evenement = new Event(
      this.form._id,
      this.form.title1,
      this.form.title2,
      this.form.img1,
      this.form.img2,
      this.form.description,
      this.form.date,
      this.form.dateDebut,
      this.form.dateFin,
      this.form.lieu,
      this.form.city,
      this.form.country,
      this.form.email,
      this.form.siteWeb,
      this.form.tags,
      this.form.submitAbstract,
      this.form.register, 
      ) 
     
      console.log("***********data "+ this.evenement._id);
      console.log("***********data "+ this.form.siteWeb);
      console.log("event "+ JSON.stringify(this.evenement))},
      (error) => { console.log(error)}
  )
}

/* updateEvent(event:Event){
  JSON.stringify("$$$$$$$$$$$$$"+event);
} */

update(){
  console.log("NEW EVENT" +JSON.stringify(this.evenement))
  
  this.newEvent = new Event(
  this.form._id,
  this.form.title1,
  this.form.title2,
  this.form.img1,
  this.form.img2,
  this.form.description,
  this.form.date,
  this.form.dateDebut,
  this.form.dateFin,
  this.form.lieu,
  this.form.city,
  this.form.country,
  this.form.email,
  this.form.siteWeb,
  this.form.tags,
  this.form.submitAbstract,
  this.form.register, 
  );
  //this.updateEvent(this.newEvent);
  this._eventService.updateEvent(this.newEvent)
        .subscribe(data => 
        console.log("updated ***************" + JSON.stringify(this.newEvent)),
        
        error => console.log(error));
  console.log("updated ***************" + this.newEvent.country)
}


}
