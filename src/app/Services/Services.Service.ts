import {ServicesModel} from '../services-offered/Services.Model';

export class ServicesService {
  private ServicesList: ServicesModel[] = [
    new ServicesModel( 1, 'Faculty Development Program', 'assets/cloud.jpg', 'Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
    new ServicesModel( 2, 'Corporate Trainings', 'assets/cyber-security.png', 'Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
    new ServicesModel( 3, 'College Trainings', 'assets/Network.jpg', 'Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
    new ServicesModel( 4, 'Industrial Trainings', 'assets/BigData.jpg', 'Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
    new ServicesModel( 5, 'Consultancy Services', 'assets/webdevelopment.png', 'Google Chrome is a free, open-source web browser developed by Google, released in 2008.' ),
    new ServicesModel( 6, 'Online Trainings', 'assets/java.jpg', 'Google Chrome is a free, open-source web browser developed by Google, released in 2008.' )
  ];

  getServicesList() {
    return this.ServicesList.slice();
  }

}
