import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { AboutComponent } from './about.component';

export const AboutModule = angular.module('about', [
    uiRouter
  ])
  .component('about', AboutComponent)
  .config($stateProvider => {
    'ngInject';
    $stateProvider
      .state('about', {
        url: '/about',
        component: 'about',
      });
  })
  .name;
