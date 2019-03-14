import { AppComponent } from './app.component';
import ngRoute from 'angular-route';

export const AppModule = angular
.module('app', [
    ngRoute
])
.component('app', AppComponent)
.name;