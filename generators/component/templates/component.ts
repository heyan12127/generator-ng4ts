<% if(style){ %>import './<%= name %>.component.scss';

<% } %>export const <%= className %>Component = {
  templateUrl: '<%= filePath %><%= file %>.component.html',
  controller: class <%= className %>Controller {
    constructor(){
      'ngInject';
    }
  }
};