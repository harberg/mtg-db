"use strict";

module.exports = function(app) {
    app.controller("AddCardsController", function($scope, $http, $log) {
        $scope.card = {
            "cardName"  : "",
            "cardRare"  : "",
            "cardColor" : "",
            "cardSet"   : "",
            "cardQty"   : "",
            "cardPrice" : ""
        };

        $scope.uploadMessage = false;

        $scope.saveCard = function() {
            $http.post("/api/cards", $scope.card)
                .success(function(data, status, header, config) {
                    console.log("inside the save");
                    $scope.uploadMessage  = true;
                    $scope.displayMessage = "You have saved " + $scope.card.cardName;
                    $scope.card.cardName  = "";
                    $scope.card.cardRare  = "";
                    $scope.card.cardColor = "";
                    $scope.card.cardSet   = "";
                    $scope.card.cardQty   = "";
                    $scope.card.cardPrice = "";
                    $scope.cardSubmitForm.$setPristine();
                })
                .error(function(data) {
                    $log.warn(data)
                });
        };// end saveCard
    });// end app.controller
};