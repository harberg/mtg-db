"use strict";

module.exports = function(app) {
    app.controller("AddCardsController", function($scope, $http, $log) {
        $scope.card = {
            "cardName"  : "",
            "cardPrice" : "",
            "cardSet"   : "",
            "cardColor" : ""
        };

        $scope.saveCard = function() {
            $http.post("/api/cards", $scope.card)
                .success(function(data, status, header, config) {
                    console.log("inside the save");
                })
                .error(function(data) {
                    $log.warn(data)
                });
        };// end saveCard
    });// end app.controller
};