import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { <%= className %>Component } from '.<%= file %>.component';

export const <%= className %>Module = angular
  .module('<%= name %>', [
    uiRouter
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
