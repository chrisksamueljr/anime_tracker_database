export default function config($routeProvider) {
    $routeProvider
        .when("/", {
            template: '<home-component></home-component>'
        })
        .otherwise('/');
} 