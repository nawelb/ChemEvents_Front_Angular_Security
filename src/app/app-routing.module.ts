import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './content/login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResearchComponent } from './research/research.component';
import { PersonalSpaceComponent } from './personal-space/personal-space.component';
import { AdminSpaceComponent } from './admin-space/admin-space.component';
import { UpdateEventComponent } from './update-event/update-event.component';


const routes: Routes = [
  {path: 'events', component: EventsComponent}, 
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: '', redirectTo:'/events', pathMatch:'full'},
  {path: 'signup', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent}, 
  {path:'results', component:ResearchComponent},
  {path:'personalSpace', component:PersonalSpaceComponent},
  {path:'adminSpace', component:AdminSpaceComponent},
  {path:'updateEvent/:id', component:UpdateEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
