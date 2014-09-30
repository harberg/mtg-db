"use strict";

module.exports = function(app) {
    app.controller("AddCardsController", function($scope, $http, $log) {
        $scope.card = {
            "cardName"  : "",
            "cardPrice" : "",
            "cardSet"   : "",
            "cardColor" : ""
        };

        $scope.uploadMessage = false;

        $scope.saveCard = function() {
            $http.post("/api/cards", $scope.card)
                .success(function(data, status, header, config) {
                    console.log("inside the save");
                    $scope.uploadMessage  = true;
                    $scope.displayMessage = "You have saved " + $scope.card.cardName;
                    $scope.card.cardName  = "";
                    $scope.card.cardPrice = "";
                    $scope.card.cardSet   = "";
                    $scope.card.cardColor = "";
                    $scope.cardSubmitForm.$setPristine();
                })
                .error(function(data) {
                    $log.warn(data)
                });
        };// end saveCard
    });// end app.controller
};