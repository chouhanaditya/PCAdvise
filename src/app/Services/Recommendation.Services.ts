import {RecommendationModel} from '../recommendations/Recommendation.Model';

export class RecommendationServices {
private RecommendationList: RecommendationModel[] = [
  new RecommendationModel( 1,'Aditya Chouhan','/assets/sample.jpeg','abc@gmail.com','402-913-4882','Developer Intern, UNMC','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 2,'Aditya Chouhan','/assets/sample.jpeg','abc@gmail.com','402-913-4882','Developer Intern, UNMC','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 3,'Aditya Chouhan','/assets/sample.jpeg','abc@gmail.com','402-913-4882','Developer Intern, UNMC','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 4,'Aditya Chouhan','/assets/sample.jpeg','abc@gmail.com','402-913-4882','Developer Intern, UNMC','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 5,'Aditya Chouhan 2','/assets/sample.jpeg','abc@gmail.com','402-913-4882','Developer Intern, UNMC','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 6,'Aditya Chouhan 2','/assets/sample.jpeg','abc@gmail.com','402-913-4882','Developer Intern, UNMC','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 7,'Aditya Chouhan 2','/assets/sample.jpeg','abc@gmail.com','402-913-4882','Developer Intern, UNMC','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 8,'Aditya Chouhan 2','/assets/sample.jpeg','abc@gmail.com','402-913-4882','Developer Intern, UNMC','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 9,'Aditya Chouhan','/assets/sample.jpeg','abc@gmail.com','402-913-4882','Developer Intern, UNMC','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 10,'Aditya Chouhan','/assets/sample.jpeg','abc@gmail.com','402-913-4882','Developer Intern, UNMC','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' )
];

getRecommendationList() {
  return this.RecommendationList.slice();
}

}
