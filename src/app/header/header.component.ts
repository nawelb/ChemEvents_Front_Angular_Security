import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../common/services/token-storage.service';
import { ResearchLinkService } from '../common/services/research-link.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private roles: string[];
  public username: string;
  public authority: string;
  isLoggedIn = false;
  isCollapsed = true;

  
  constructor(private tokenStorage: TokenStorageService, public router:Router, researchLinkService : ResearchLinkService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = false;
      this.roles = this.tokenStorage.getAuthorities();
      this.username=this.tokenStorage.getUsername();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.isLoggedIn = true;
          this.authority = 'admin';
          return false;
        } /* else if (role === 'ROLE_PM') {
          this.isLoggedIn = true;
          this.authority = 'pm';
          return false;
        } */
        this.isLoggedIn = true;
        this.authority = 'user';
        return true;
      });
    }
  }
  onLogout(){
    this.tokenStorage.signOut();
    window.location.reload();
    this.router.navigate(['/events'])
  }
  
  }

