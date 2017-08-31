import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { RecommendationServices} from './Services/Recommendation.Services';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { TrainingsOfferedComponent } from './trainings-offered/trainings-offered.component';
import {TrainingsService} from './Services/Trainings.Service';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import {ServicesService} from "./Services/Services.Service";

const appRoutes: Routes = [
  {  path: '', redirectTo: '/Home', pathMatch : 'full'},
  { path: 'Home', component: HomeComponent},
  { path: 'ContactUs', component: ContactUsComponent},
  { path: 'Recommendations', component: RecommendationsComponent},
  { path: 'TrainingsOffered', component: TrainingsOfferedComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent,
    ContactUsComponent,
    FooterComponent,
    RecommendationsComponent,
    TrainingsOfferedComponent,
    ServicesOfferedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [RecommendationServices, TrainingsService, ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
