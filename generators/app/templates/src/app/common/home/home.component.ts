import './home.component.scss';

export const HomeComponent = {
  templateUrl: 'app/common/home/home.component.html',
  controller: class HomeController{
    godDamn(){
      console.log(this);
    }
  }
};
