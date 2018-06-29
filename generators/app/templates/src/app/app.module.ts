import * as angular from 'angular';

import { AppComponent } from './app.component';
import { CommonModule } from './common/common.module';
import { ComponentsModule } from './components/components.module';
import './app.component.scss';

const AppModule: ng.IModule = angular
  .module('app', [
    'ui.router',
    'ngMessages',
    'ngMaterial',
    'ngAria',
    'ngAnimate',
    CommonModule,
    ComponentsModule
  ])
  .component('app', AppComponent)
  .config(($locationProvider, $urlRouterProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  }).config(($mdThemingProvider: ng.material.IThemingProvider) => {
    "ngInject";

    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('green');
});

export default AppModule.name;