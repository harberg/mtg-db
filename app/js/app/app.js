require("angular/angular");
require("angular-route");
require("angular-resource");
require("angular-base64");

var ancientApp = angular.module("ancientApp", ["ngRoute", "base64" ]);

require("./controllers/addCardsController.js")(ancientApp);
require("./controllers/searchCardsController.js")(ancientApp);
require("./controllers/uploadCardsDBController.js")(ancientApp);

ancientApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "views/searchCards.html",
            controller  : "SearchCardsController"
        })
        .when("/add", {
            templateUrl : "views/addCards.html",
            controller  : "AddCardsController"
        })
        .when("/upload", {
            templateUrl : "views/uploadCardsDB.html",
            controller  : "UploadCardsDBController"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);