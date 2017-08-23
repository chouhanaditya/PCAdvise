import {RecommendationModel} from '../recommendations/Recommendation.Model';
import {TrainingsModel} from '../trainings-offered/Trainings.Model';

export class TrainingsService {
  private TrainingList: TrainingsModel[] = [
     new TrainingsModel( 1,'Java- Basic to advanced','/assets/java.jpg','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
    new TrainingsModel( 2,'Cyber Security','/assets/cyber-security.png','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
    new TrainingsModel( 3,'Networking Concepts','/assets/Network.jpg','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
    new TrainingsModel( 4,'Complete Dotnet','/assets/Dotnet.jpg','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
    new TrainingsModel( 5,'Basics of Web Development','/assets/java.jpg','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
    new TrainingsModel( 6,'Full Stack Development','/assets/java.jpg','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
    new TrainingsModel( 7,'What is Bitcoin?','/assets/java.jpg','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
    new TrainingsModel( 8,'Ethical Hacking','/assets/java.jpg','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  ];

  getTrainingList() {
    return this.TrainingList.slice();
  }

}
