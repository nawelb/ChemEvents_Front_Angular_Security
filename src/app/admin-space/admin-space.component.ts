import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../common/services/event.service';
import { Event } from '../common/data/event';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import { Session } from 'protractor';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../common/services/token-storage.service';

@Component({
  selector: 'app-admin-space',
  templateUrl: './admin-space.component.html',
  styleUrls: ['./admin-space.component.scss'], 
  animations:[]
})
export class AdminSpaceComponent implements OnInit {
  @Input() event:Event;
  state:string="small";
  listeEvents:Event[];
  eventId:string;
  public isCollapsed = false;
  private roles: string[];
  public username: string;
  public authority: string;
  isLoggedIn = false;
  keyWord:string;
  city:string;
  country:string;

  tableHeaders = ["title1", "title2", "img1", "img2", 
    "description", "date", "dateDebut", "dateFin", "lieu",
    "city", "country", "email", "siteWeb", "tags", 
    "submitAbstract", "register"];
  selectedEventEmployeId: number;

  constructor(private _eventService : EventService,private tokenStorage: TokenStorageService, private eventService:EventService, private _route: ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = false;
      this.roles = this.tokenStorage.getAuthorities();
      this.username=this.tokenStorage.getUsername();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.isLoggedIn = true;
          this.authority = 'admin';
          this.getAllEvents();
          return false;
        } else if (role === 'ROLE_PM') {
          this.isLoggedIn = true;
          this.authority = 'pm';
          return false;
        }
        this.isLoggedIn = true;
        this.authority = 'user';
        return true;
      });
    } 
    
/*     this.selectedEventEmployeId = +this._route.snapshot.paramMap.get('_id');
 */  
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

deleteEvent(id:string){
  let res=this.eventService.deleteEvent(id);
  res.subscribe(
    data => {
      this.event=data,
      this.getAllEvents();
      console.log(data)
    }, (error) => {console.log(error)}
  )

}



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

}