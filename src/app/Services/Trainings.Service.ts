import {RecommendationModel} from '../recommendations/Recommendation.Model';
import {TrainingsModel} from '../trainings-offered/Trainings.Model';

export class TrainingsService {
  private TrainingList: TrainingsModel[] = [
     new TrainingsModel( 1,'Cloud Computing','assets/cloud.jpg','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
    new TrainingsModel( 2,'Cyber Security','assets/cyber-security.png','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
    new TrainingsModel( 3,'Networking Concepts','assets/Network.jpg','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
    new TrainingsModel( 4,'Big Data Concepts','assets/BigData.jpg','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
    new TrainingsModel( 5,'Basics of Web Development','assets/webdevelopment.png','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
    new TrainingsModel( 6,'Java Training','assets/java.jpg','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
    new TrainingsModel( 7,'Block Chain Technology','assets/blockchain.jpg','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
    new TrainingsModel( 8,'Ethical Hacking','assets/ethical.jpg','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  ];

  getTrainingList() {
    return this.TrainingList.slice();
  }

}
