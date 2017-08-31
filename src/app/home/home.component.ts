import { Component, OnInit } from '@angular/core';
import {RecommendationServices} from '../Services/Recommendation.Services';
import {RecommendationModel} from '../recommendations/Recommendation.Model';
import {TrainingsModel} from '../trainings-offered/Trainings.Model';
import {TrainingsService} from '../Services/Trainings.Service';
import {ServicesModel} from '../services-offered/Services.Model';
import {ServicesService} from '../Services/Services.Service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  RecommendationList: RecommendationModel[];
  TrainingList: TrainingsModel[];
  ServiceList: ServicesModel[];
  ServiceListtop3: ServicesModel[];
  ServiceListlast3: ServicesModel[];
  // TrainingListDisplay4: TrainingsModel[];
  RecommendationListDisplay4: RecommendationModel[];

  constructor(public objRecommendationService: RecommendationServices, public objTrainingservices: TrainingsService, public objServicesService: ServicesService) { }

  ngOnInit() {
    this.RecommendationList = this.objRecommendationService.getRecommendationList();
    this.RecommendationListDisplay4 = this.RecommendationList.slice(0, 4);
    this.TrainingList = this.objTrainingservices.getTrainingList();
    // this.TrainingListDisplay4 = this.TrainingList.slice(0, 4);
    this.ServiceList = this.objServicesService.getServicesList();
    this.ServiceListtop3  =  this.ServiceList.slice(0, 3);
    this.ServiceList = this.objServicesService.getServicesList();
    this.ServiceListlast3  =  this.ServiceList.slice(3, 3);
  }
  OnRecommendation_RightClick() {
    this.RecommendationListDisplay4 = this.RecommendationList.slice(4, 8);
  }
  OnRecommendation_LeftClick() {
    this.RecommendationListDisplay4 = this.RecommendationList.slice(0, 4);
  }
  // OnTrainings_LeftClick() {
  //   this.TrainingListDisplay4 = this.TrainingList.slice(0, 4);
  // }
  // OnTrainings_RightClick() {
  //   this.TrainingListDisplay4 = this.TrainingList.slice(4, 8);
  // }
}
