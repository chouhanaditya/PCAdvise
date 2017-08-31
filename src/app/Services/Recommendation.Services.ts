import {RecommendationModel} from '../recommendations/Recommendation.Model';

export class RecommendationServices {
private RecommendationList: RecommendationModel[] = [
  new RecommendationModel( 1, 'Yash Bindal', 'assets/recommendations/Default_user.jpg', '', '', 'Malware Researcher, Sonic Wall Banglore', 'Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 2, 'Ankit Yadav', 'assets/recommendations/Ankit.jpeg', '', '', 'Student', 'I\'m happy to present my views for Dr. Pranay Chauhan Sir and highly recommend him for academic research, Motivator, skilled leader and maintains professionalism. One of the best mentor, professor and advisor, I have ever had in my college life. Dr. Pranay Chauhan Sir helped me getting me getting my steps towards my goal and helped me in chasing those goals. I wish him luck and success. \n' +
    'Thank you Sir for making me what I am today.' ),
  new RecommendationModel( 3, 'Rajkumar Gangwal', 'assets/recommendations/Gangwal.jpeg', '', '', 'Investment Broker and Finance Advisor', 'I am very pleased to recommend Pranay Chauhan, he has been a very good trainer. I had attended his training session, he has  good knowledge about the subject and also have excellent presentation skill.' ),
  new RecommendationModel( 4, 'Abhishek Loth', 'assets/recommendations/AbhishekLoth.jpeg', '', '', 'Technical support executive, Wipro Limited', 'You are best teacher I ever had. You have a great knowledge of cloud computing, cyber security. You are great researcher too..' ),
  new RecommendationModel( 5, 'Aditya', 'assets/recommendations/Default_user.jpg', '', '', 'Developer Intern, UNMC', 'Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 6, 'Aditya Chouhan', 'assets/recommendations/Default_user.jpg', '', '', 'Developer Intern, UNMC', 'Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 7, 'Aditya Chouhan', 'assets/recommendations/Default_user.jpg', '', '', 'Developer Intern, UNMC', 'Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 8, 'Aditya Chouhan 2', 'assets/recommendations/Default_user.jpg', '', '', 'Developer Intern, UNMC', 'Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 9, 'Aditya Chouhan', 'assets/recommendations/Default_user.jpg', '', '', 'Developer Intern, UNMC', 'Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
  new RecommendationModel( 10, 'Aditya Chouhan', 'assets/recommendations/Default_user.jpg', '', '', 'Developer Intern, UNMC', 'Google Chrome is a free, open-source web browser developed by Google, released in 2008.' )
];

getRecommendationList() {
  return this.RecommendationList.slice();
}

}
