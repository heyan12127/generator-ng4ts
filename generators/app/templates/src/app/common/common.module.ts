import * as angular from 'angular';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';

export const CommonModule = angular
  .module('common', [
    AboutModule,
    HomeModule
  ])
  .name;
