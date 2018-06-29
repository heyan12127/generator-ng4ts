import * as angular from 'angular';

import { AboutComponent } from './about.component';

export const AboutModule = angular.module('about', [
  'ui.router'
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
