import { Component } from '@angular/core';
import { TokenStorageService } from '../common/services/token-storage.service';
import { Event } from '../common/data/event';
import { EventService } from '../common/services/event.service';


@Component({
  selector: 'app-personal-space',
  templateUrl: './personal-space.component.html',
  styleUrls: ['./personal-space.component.scss']
})
export class PersonalSpaceComponent {
  //form: any={};
  private roles: string[];
  public username: string;
  public authority: string;
  isLoggedIn = false;
  event:Event=new Event("", "", "", "", "","","");
  message: any;

  constructor(private tokenStorage: TokenStorageService, private eventService:EventService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = false;
      this.roles = this.tokenStorage.getAuthorities();
      this.username=this.tokenStorage.getUsername();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.isLoggedIn = true;
          this.authority = 'admin';
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
  }
  addNewEvent(){
    console.log(JSON.stringify(this.event));
    let resp=this.eventService.addNewEvent(this.event);
    resp.subscribe((data)=> this.message=data);
  }

  
}
