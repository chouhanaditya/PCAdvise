import { Component, OnInit } from '@angular/core';
import {RecommendationServices} from '../Services/Recommendation.Services';
import {RecommendationModel} from '../recommendations/Recommendation.Model';
import {TrainingsModel} from '../trainings-offered/Trainings.Model';
import {TrainingsService} from '../Services/Trainings.Service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  RecommendationList: RecommendationModel[];
  TrainingList: TrainingsModel[];
  TrainingListDisplay4: TrainingsModel[];
  RecommendationListDisplay4: RecommendationModel[];

  constructor(public objRecommendationService: RecommendationServices, public objTrainingservices: TrainingsService) { }

  ngOnInit() {
    this.RecommendationList = this.objRecommendationService.getRecommendationList();
    this.RecommendationListDisplay4 = this.RecommendationList.slice(0, 4);
    this.TrainingList = this.objTrainingservices.getTrainingList();
    this.TrainingListDisplay4 = this.TrainingList.slice(0, 4);
  }
  OnRecommendation_RightClick() {
    this.RecommendationListDisplay4 = this.RecommendationList.slice(4, 8);
  }
  OnRecommendation_LeftClick() {
    this.RecommendationListDisplay4 = this.RecommendationList.slice(0, 4);
  }
  OnTrainings_LeftClick() {
    this.TrainingListDisplay4 = this.TrainingList.slice(0, 4);
  }
  OnTrainings_RightClick() {
    this.TrainingListDisplay4 = this.TrainingList.slice(4, 8);
  }
}
