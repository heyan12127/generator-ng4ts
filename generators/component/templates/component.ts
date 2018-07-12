<% if(style){ %>import './<%= moduleName %>.component.scss';

<% } %>export const <%= className %>Component = {
  templateUrl: '<%= filePath %><%= file %>.component.html',
  controller: class <%= className %>Controller {
    constructor(){
      'ngInject';
    }
  }
};