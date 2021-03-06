import { Component } from '@angular/core';
import { TokenStorageService } from '../common/services/token-storage.service';
import { Event } from '../common/data/event';
import { EventService } from '../common/services/event.service';
import { AddedByUserService } from '../common/services/added-by-user.service';
import { AddedByUser } from '../common/data/addedbyuser';


@Component({
  selector: 'app-personal-space',
  templateUrl: './personal-space.component.html',
  styleUrls: ['./personal-space.component.scss']
})
export class PersonalSpaceComponent {
  form: any={};
  private roles: string[];
  public username: string;
  public authority: string;
  isLoggedIn = false;
  event:Event=new Event();
  message: any;
  required:false;
  addedbyuser:AddedByUser= new AddedByUser();

  constructor(private tokenStorage: TokenStorageService, private eventService:EventService, private addedByUserService:AddedByUserService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = false;
      this.roles = this.tokenStorage.getAuthorities();
      this.username=this.tokenStorage.getUsername();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.isLoggedIn = true;
          this.authority = 'admin';
          return true;
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
    
  }
  addNewEvent(){
    console.log(JSON.stringify(this.event));
    let resp=this.eventService.addNewEvent(this.event);

    this.addedbyuser.username=this.username;
    this.addedbyuser.event=this.event.title1;
    let added=this.addedByUserService.addAddedByUser(this.addedbyuser);

    if(this.event.title1=="" || this.event.dateDebut=="" || this.event.siteWeb==""){
      console.log("event vide")
    }else{

      resp.subscribe((data)=> {this.event});
      added.subscribe((data)=> {this.addedbyuser;
      console.log(JSON.stringify(this.addedbyuser)) })
      console.log("event added")

    }

    
  }

  
}
