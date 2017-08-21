import { Component, OnInit } from '@angular/core';
import {RecommendationServices} from '../Services/Recommendation.Services';
import {RecommendationModel} from './Recommendation.Model';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  RecommendationList: RecommendationModel[];
  constructor(public objRecommendationServices: RecommendationServices) { }

  ngOnInit() {
    this.RecommendationList = this.objRecommendationServices.getRecommendationList();
  }

}
