import {RecommendationModel} from '../recommendations/Recommendation.Model';

export class RecommendationServices {
private RecommendationList: RecommendationModel[] = [
  new RecommendationModel( 1,'Aditya Chouhan','assets/Default_user.jpg','abc@gmail.com','402-913-4882','Developer Intern, UNMC','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 2,'Ankit Yadav','assets/Ankit.jpeg','abc@gmail.com','402-913-4882','Student','I\'m happy to present my views for Dr. Pranay Chauhan Sir and highly recommend him for academic research, Motivator, skilled leader and maintains professionalism. One of the best mentor, professor and advisor, I have ever had in my college life. Dr. Pranay Chauhan Sir helped me getting me getting my steps towards my goal and helped me in chasing those goals. I wish him luck and success. \n' +
    'Thank you Sir for making me what I\'m today.' ),
  new RecommendationModel( 3,'Rajkumar Gangwal','assets/Gangwal.jpeg','abc@gmail.com','402-913-4882','Student','I\'m very pleased to recommend Pranay Chauhan, he has been a very good trainer. I had attended his training session, he has  good knowledge about the subject and also have excellent presentation skill.' ),
  new RecommendationModel( 4,'Abhishek Loth','assets/Default_user.jpg','abc@gmail.com','402-913-4882','Developer Intern, UNMC','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 5,'Rajkumar Gangwal','assets/Gangwal.jpeg','abc@gmail.com','402-913-4882','Developer Intern, UNMC','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 6,'Abhishek Loth','assets/Default_user.jpg','abc@gmail.com','402-913-4882','Software Engineer, Wipro Limited','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 7,'Yash Bindal','assets/Default_user.jpg','abc@gmail.com','402-913-4882','Malware Researcher, Sonic Wall Banglore','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 8,'Aditya Chouhan 2','assets/Default_user.jpg','abc@gmail.com','402-913-4882','Developer Intern, UNMC','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 9,'Aditya Chouhan','assets/Default_user.jpg','abc@gmail.com','402-913-4882','Developer Intern, UNMC','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 10,'Aditya Chouhan','assets/Default_user.jpg','abc@gmail.com','402-913-4882','Developer Intern, UNMC','Google Chrome is a free, open-source web browser developed by Google, released in 2008.' )
];

getRecommendationList() {
  return this.RecommendationList.slice();
}

}
