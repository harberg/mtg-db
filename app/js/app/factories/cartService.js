'use strict';

module.exports = function(app) {
    app.factory("CartService", function($http, $location, $log) {
        var myCart = [];

        return {
            cart : myCart
        }
    }); // app.factory("CartService")
}