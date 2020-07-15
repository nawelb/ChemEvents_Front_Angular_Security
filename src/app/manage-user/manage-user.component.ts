import { Component, OnInit, Input } from '@angular/core';
import { TokenStorageService } from '../common/services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageUsersService } from '../common/services/manage-users.service';
import { User } from '../common/data/user';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  @Input() user:User;
  listeUsers: User[];
  userUsername: string;
  public isCollapsed = false;
  private roles: string[];
  public username: string;
  public authority: string;
  isLoggedIn = false;

  constructor(private tokenStorage: TokenStorageService, private manageUserService: ManageUsersService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = false;
      this.roles = this.tokenStorage.getAuthorities();
      this.username = this.tokenStorage.getUsername();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.isLoggedIn = true;
          this.authority = 'admin';
          this.getAllUsers();
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
  getAllUsers(): void {
    this.manageUserService.findAll().subscribe(
      data => {
        this.listeUsers = data,
          console.log(JSON.stringify(this.listeUsers))
      }, (error) => { console.log(error) }
    );
  }

  deleteUser(username:string){
    let res=this.manageUserService.deleteEvent(username);
    res.subscribe(
      data => {
        this.user=data,
        this.getAllUsers();
        console.log(data)
      }, (error) => {console.log(error)}
    )
  
  }
}

  
