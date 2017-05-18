// Routes
app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
           .when('/results', {
               templateUrl: 'views/results.html',
               controller: 'HomeController'
           })
        /*
        .when('/checkout', {
            templateUrl: 'views/checkout.html',
            controller: 'CheckOutController'
        })
     */
      .otherwise({ redirectTo: '/' });
           
});
