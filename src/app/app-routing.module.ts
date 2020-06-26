import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './content/login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path: 'events', component: EventsComponent}, 
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: '', redirectTo:'/events', pathMatch:'full'},
  {path: 'signup', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
