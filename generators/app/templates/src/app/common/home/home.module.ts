import * as angular from 'angular';

import { HomeComponent } from './home.component';

export const HomeModule = angular
  .module('home', [
    'ui.router'
  ])
  .component('home', HomeComponent)
  .config($stateProvider => {
    'ngInject';
    $stateProvider
      .state('index', {
        url: '/',
        component: 'home',
      })
      .state('home', {
        url: '/home',
        component: 'home'
      });
  })
  .name;
