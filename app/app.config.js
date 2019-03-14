export default function config($routeProvider) {
    $routeProvider
        .when("/", {
            template: '<home-module></home-module>'
        })
        .otherwise('/');
} 