import angular from 'angular';
import ngRoute from 'angular-route';

import config from './app.config';
import {
    HomeComponent
} from './module/home/home.component';

export const AppModule = angular
.module('app', [
    ngRoute
])
.config(config)
.component('homeComponent', HomeComponent)
.name;