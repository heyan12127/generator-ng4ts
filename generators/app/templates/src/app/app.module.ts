import * as angular from 'angular';
import * as ngAnimate from 'angular-animate';
import * as ngAria from 'angular-aria';
import * as ngMessages from 'angular-messages';
import uiRouter from '@uirouter/angularjs';
import { CommonModule } from './common/common.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import './app.component.scss';

export const AppModule = angular
  .module('app', [
    ngAnimate,
    ngAria,
    ngMessages,
    uiRouter,
    CommonModule,
    ComponentsModule,
  ])
  .component('app', AppComponent)
  .config(($locationProvider, $urlRouterProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  })
  .name;