/*jslint node: true */
"use stict";

module.exports = function(app) {
    app.controller("SearchCardsController", function($scope, $http) {
        $http({
            method : "GET",
            url : "/api/cards"
        })
        .success(function(data, status, headers, config) {
            $scope.cards = data;
        })
        .error(function(data, status, headers, config) {
            console.log(data);
        });

        $scope.predicate = "cardName";


    });// end app.controller
};// end module.exports