import { Component, OnInit } from '@angular/core';
import {TrainingsService} from '../Services/Trainings.Service';
import {TrainingsModel} from './Trainings.Model';

@Component({
  selector: 'app-trainings-offered',
  templateUrl: './trainings-offered.component.html',
  styleUrls: ['./trainings-offered.component.css']
})
export class TrainingsOfferedComponent implements OnInit {
  TrainingList: TrainingsModel[];
  constructor(public objTrainingsService: TrainingsService) { }

  ngOnInit() {
    this.TrainingList = this.objTrainingsService.getTrainingList();
  }

}
