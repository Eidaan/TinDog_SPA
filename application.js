var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html'
        })
        .when('/features', {
            templateUrl: 'features.html'
        })
        .when('/testinomial', {
            templateUrl: 'testinomial.html'
        })
        .when('/pricing', {
            templateUrl: 'pricing.html'
        })
        .when('/contact', {
            templateUrl: 'contact.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
