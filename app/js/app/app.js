require("angular/angular");
require("angular-route");
require("angular-resource");
require("angular-base64");

var ancientApp = angular.module("ancientApp", ["ngRoute", "base64" ]);

require("./controllers/addCardsController.js")(ancientApp);

ancientApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "views/addCards.html",
            controller : "AddCardsController"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);