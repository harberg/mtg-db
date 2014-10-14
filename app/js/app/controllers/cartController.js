"use strict";

module.exports = function(app) {
    app.controller("CartController", function($scope, $http, $log, CartService) {
        $scope.cart = CartService.cart;

    });// end app.controller
};