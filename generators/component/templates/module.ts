import * as angular from 'angular';

import { <%= className %>Component } from '.<%= file %>.component';

export const <%= className %>Module = angular
  .module('<%= name %>', [
    'ui.router'
  ])
  .component('<%= name %>', <%= className %>Component)
  .config($stateProvider => {
    'ngInject';
    $stateProvider
      .state('<%= name %>', {
        url: '/<%= name %>',
        component: '<%= name %>'
      });
  })
  .name;
