import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../common/services/event.service';
import { Event } from '../common/data/event';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Session } from 'protractor';
import { Observable, forkJoin } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../common/services/token-storage.service';
import { AddedByUserService } from '../common/services/added-by-user.service';
import { EventWithUser } from '../common/data/eventWithUser';
import { AddedByUser } from '../common/data/addedbyuser';

@Component({
  selector: 'app-admin-space',
  templateUrl: './admin-space.component.html',
  styleUrls: ['./admin-space.component.scss'],
  animations: []
})
export class AdminSpaceComponent implements OnInit {
  tousLesEvents:  EventWithUser[]
  @Input() event: Event;
  state: string = "small";
  listeEvents: Event[];
  eventId: string;
  listeEventWithUser: EventWithUser[] = [];
  eventWithUser: EventWithUser = new EventWithUser();
  public isCollapsed = false;
  private roles: string[];
  public username: string;
  public authority: string;
  isLoggedIn = false;
  keyWord: string;
  city: string;
  country: string;
  eventAddedByUser: AddedByUser;
  listEventAddedByUser: AddedByUser[];

  form: any;

  tableHeaders = ["title1", "title2", "img1", "img2",
    "description", "date", "dateDebut", "dateFin", "lieu",
    "city", "country", "email", "siteWeb", "tags",
    "submitAbstract", "register"];
  selectedEventEmployeId: number;

  constructor(private _eventService: EventService, private tokenStorage: TokenStorageService,
    private eventService: EventService, private _route: ActivatedRoute, private _router: Router,
    private addedbyuser: AddedByUserService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = false;
      this.roles = this.tokenStorage.getAuthorities();
      this.username = this.tokenStorage.getUsername();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.isLoggedIn = true;
          this.authority = 'admin';
          console.log("ensuite")
          console.log("ds ng" + this.listeEvents)
          this.getAllEvents()

          return false;
        }
        this.isLoggedIn = true;
        this.authority = 'user';
        return true;
      });
    }

  }


  getAllEvents(): void {
    this._eventService.findAll().subscribe(
      data => {
        this.listeEvents = data,
          console.log(data)
        this.getUsernamePerEvent(this.listeEvents)
      }, (error) => { console.log(error) }
    );
  }

  async getUsernamePerEvent(listeEvents: Event[]) {
    var listeInter=[];
    var listeProvTotale=[];
    for (let index = 0; index < listeEvents.length; index++) {
      const element = listeEvents[index];

      this.eventWithUser._id = element._id;
      this.eventWithUser.title1 = element.title1;
      this.eventWithUser.title2 = element.title2;
      this.eventWithUser.img1 = element.img1;
      this.eventWithUser.img2 = element.img2;
      this.eventWithUser.description = element.description;
      this.eventWithUser.dateDebut = element.dateDebut;
      this.eventWithUser.dateFin = element.dateFin;
      this.eventWithUser.lieu = element.lieu;
      this.eventWithUser.city = element.city;
      this.eventWithUser.country = element.country;
      this.eventWithUser.email = element.email;
      this.eventWithUser.siteWeb = element.siteWeb;
      this.eventWithUser.tags = element.tags;
      this.eventWithUser.submitAbstract = element.submitAbstract;
      this.eventWithUser.register = element.register;
      listeProvTotale.push(this.eventWithUser);
      this.eventWithUser=new EventWithUser()
      listeInter.push(this.addedbyuser.findByEvent(element._id))

    }

    forkJoin<AddedByUser>(listeInter).subscribe((reponse) => {
      console.log(JSON.stringify("TAILLLE"+reponse.length))
      for (let index = 0; index < reponse.length; index++) {
        //console.log(index +"***************"+ reponse[index])
        if(reponse[index] != null){
          //console.log(index+"$$$$$$$$$$$"+ reponse[index].username)
          listeProvTotale[index].username = reponse[index].username;
        }else{
          listeProvTotale[index].username = null;
        }
        this.listeEventWithUser.push(listeProvTotale[index]);
        this.tousLesEvents=this.listeEventWithUser;
      }
    },
      (err) => { console.log(err); });
  } 

  async findbyEvent(string: string) {
    this.addedbyuser.findByEvent(string).subscribe(
      data => {
        this.form = data;
        console.log("2eme METHHHH" + JSON.stringify(data))
        this.eventWithUser.username = this.form.username;
      })
    }
 
 /*  openDivUpdate(): void {
      this.state = (this.state === "small" ? 'large' : 'small');
    } */

  editEvent(event) {
      this.eventId = event._id;
      sessionStorage.setItem("_id", this.eventId);
      this._router.navigate(['/updateEvent', this.eventId]);
    }

  deleteEvent(id: string) {
      let res = this.eventService.deleteEvent(id);
      let resMySQL= this.addedbyuser.deleteByEvent(id);
      res.subscribe(
        data => {
          this.event = data,
            this.getAllEvents();         
          console.log(data)
        }, (error) => { console.log(error) }
      )
      resMySQL.subscribe(
        data => {
          this.eventAddedByUser = data,         
          console.log(data)
        }, (error) => { console.log(error) }
      )
      window.location.reload();
    }


    researchUser(keyWord: string){
      console.log(keyWord)
       this.listeEventWithUser=this.tousLesEvents.filter(
         ev=> ev.username==keyWord || 
         ev.title1==keyWord  || 
         ev.title2==keyWord || ev.tags==keyWord ||
          ev.description==keyWord || ev.tags==keyWord || ev.dateDebut==keyWord ||
         ev.dateFin==keyWord || ev.city==keyWord || ev.country==keyWord )
    }


}