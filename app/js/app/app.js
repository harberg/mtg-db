require("angular/angular");
require("angular-route");
require("angular-resource");
require("angular-base64");

var ancientApp = angular.module("ancientApp", ["ngRoute", "base64"]);

require("./controllers/addCardsController.js")(ancientApp);
require("./controllers/searchCardsController.js")(ancientApp);
require("./controllers/uploadCardsDBController.js")(ancientApp);
require("./controllers/editCardsController.js")(ancientApp);
require("./factories/cartService.js")(ancientApp);

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
        .when("/:id", {
            templateUrl : "views/editCards.html",
            controller  : "EditCardsController"
        })
        .when("/upload", {
            templateUrl : "views/uploadCardsDB.html",
            controller  : "UploadCardsDBController"
        })
        .when("/cart", {
            templateUrl : "views/cart.html",
            controller  : "CartController"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);