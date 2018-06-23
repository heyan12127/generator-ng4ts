<% if(style){ %>import './<%= name %>.component.scss';

<% } %>export const <%= className %>Component = {
  template: '<%= filePath %><%= file %>.component.html',
  controller: class <%= className %>Controller {
    constructor(){
      'ngInject';
    }
  }
};