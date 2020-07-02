import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../common/services/event.service';
import { Event } from '../common/data/event';
import { ObservableInput, Observable } from 'rxjs';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})

export class UpdateEventComponent implements OnInit {
  form:any;
  private evenement:Event;
  //event:any;

  _id=sessionStorage.getItem('_id');
  constructor( private _route:ActivatedRoute, private _eventService:EventService) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(parameterMap => {
      parameterMap.get('_id');
      console.log("SessionStorage = " + sessionStorage.getItem('_id'));
      console.log("_id NgOnInit "+this._id);
      this.getEvent(this._id);
      console.log("event ngOnInit: "+this.evenement._id)

    })
  }

private getEvent(_id:string){
 return this._eventService.findById(_id).subscribe(
    data => {
      this.form=data;
      let title1=this.form.title1;
      let title2=this.form.title2;
      let img1=this.form.img1;
      
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
      /* this.evenement._id=this.form._id;
      console.log(this.evenement._id)
      this.form.title1 = data.title1;
      this.form.title2=data.title2;
      this.form.img1=data.img1;
      this.form.img2=data.img2;
      this.form.description=data.description;
      this.form.date=data.date;
      this.form.dateDebut=data.dateDebut;
      this.form.dateFin=data.dateFin;
      this.form.lieu=data.lieu;
      this.form.city=data.city;
      this.form.country=data.country;
      this.form.email=data.email;
      this.form.siteWeb=data.siteWeb;
      this.form.tags=data.tags;
      this.form.submitAbstract=data.submitAbstract;
      this.form.register=data.register;
 */
     /*  this.event._id=data._id;
      this.event.title1 = data.title1;
      this.event.title2=data.title2;
      this.event.img1=data.img1;
      this.event.img2=data.img2;
      this.event.description=data.description;
      this.event.date=data.date;
      this.event.dateDebut=data.dateDebut;
      this.event.dateFin=data.dateFin;
      this.event.lieu=data.lieu;
      this.event.city=data.city;
      this.event.country=data.country;
      this.event.email=data.email;
      this.event.siteWeb=data.siteWeb;
      this.event.tags=data.tags;
      this.event.submitAbstract=data.submitAbstract;
      this.event.register=data.register; */
      //this.event=data;
      console.log("***********data "+ this.evenement._id);
      console.log("event "+ JSON.stringify(this.evenement))},
      (error) => { console.log(error)}
  )
 

}

}
