import * as angular from 'angular';

import { <%= className %>Component } from '.<%= file %>.component';

export const <%= className %>Module = angular
  .module('<%= moduleName %>', [
    'ui.router'
  ])
  .component('<%= componentTagName %>', <%= className %>Component)
  .config($stateProvider => {
    'ngInject';
    $stateProvider
      .state('<%= url %>', {
        url: '/<%= url %>',
        component: '<%= componentTagName %>'
      });
  })
  .name;
