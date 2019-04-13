import angular from 'angular';
import ngRoute from 'angular-route';
// import ngMessages from 'ngMessages';
import config from './app.config';
// import ngStrap from 'ngStrap';
// import ngCookies from 'angular-cookies';

import {
    HomeComponent
} from './module/home/home.component';

export const AppModule = angular
.module('app', [
    ngRoute,
    // ngCookies,
    // ngMessages,
    // ngStrap
])
.config(config)
.component('homeComponent', HomeComponent)
.name;



// <script src="bower_components/angular/angular.js"></script>
// <script src="bower_components/angular-animate/angular-animate.js"></script>
// <script src="bower_components/angular-strap/dist/angular-strap.min.js"></script>
// <script src="bower_components/angular-strap/dist/angular-strap.tpl.min.js"></script>
// <script src="bower_components/angular-messages/angular-messages.js"></script>
// <script src="bower_components/angular-cookies/angular-cookies.js"></script>
// <script src="bower_components/angular-messages/angular-messages.js"></script>
// <script src="bower_components/moment/moment.js"></script>
// <script src="bower_components/angular-resource/angular-resource.js"></script>