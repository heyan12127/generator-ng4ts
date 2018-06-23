import './about.component.scss';

export const AboutComponent = {
  bindings: {},
  transclude: false,
  templateUrl: 'app/common/about/about.component.html',
  controller: class AboutController {
    title: any;
    constructor(){
      'ngInject';
      this.title = 'aaa';
    }

    testRequest() {
      let xhr = new XMLHttpRequest();
      xhr.open('get', 'http://localhost:19073/test?t=' + Date.now(), false);
      xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
      xhr.onreadystatechange = function() {
        console.log(arguments);
      }
      xhr.send(null);
    }
  }
};
