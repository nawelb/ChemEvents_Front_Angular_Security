import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './content/login/login.component';

import { BsUtilModule } from 'src/bs-util/bs-util.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EventsComponent } from './events/events.component';
import { RouterModule } from '@angular/router';
import { EventService } from './common/services/event.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { httpInterceptorProviders } from './common/services/authentication-interceptor.service';
import { RegistrationComponent } from './registration/registration.component';
import { ResearchComponent } from './research/research.component';
import { PersonalSpaceComponent } from './personal-space/personal-space.component';
import { AdminSpaceComponent } from './admin-space/admin-space.component';
import { UpdateEventComponent } from './update-event/update-event.component';

// RECOMMENDED
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    EventsComponent,
    RegistrationComponent,
    ResearchComponent,
    PersonalSpaceComponent,
    AdminSpaceComponent,
    UpdateEventComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    BsUtilModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    RouterModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
