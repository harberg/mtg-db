"use strict";

module.exports = function(app) {
    app.controller("EditCardsController", function($scope, $http, $log, $location, $routeParams) {

        $scope.getOneCard = function(card) {
            var id = $routeParams.id;
            console.log(id);
            $http({
                method : "GET",
                url : "/api/cards/" + id
            })
            .success(function(dbcard, status, headers, config) {
                card = dbcard;
                console.log(card);
                console.log(status);

                //$scope.cardName = card.cardName;

                $scope.card = {
                    "_id"       : card._id,
                    "cardName"  : card.cardName,
                    "cardRare"  : card.cardRare,
                    "cardColor" : card.cardColor,
                    "cardSet"   : card.cardSet,
                    "cardQty"   : card.cardQty,
                    "cardPrice" : card.cardPrice,
                };
                console.log("inside the success");
                //return cards;
            })
            .error(function(dbcard, status, headers, config) {
                console.log("There was and error: " + dbcard);
            });
        }

        $scope.getOneCard();

        $scope.uploadMessage = false;

        $scope.editCard = function(card) {
            console.log(card);
            $http.put("/api/cards/" + card._id, $scope.card)
                .success(function(data, status, header, config) {
                    console.log("inside the save");
                    $scope.uploadMessage  = true;
                    $scope.displayMessage = "You have edited " + $scope.card.cardName;
                })
                .error(function(data) {
                    $log.warn(data)
                });
        };// end saveCard

        $scope.returnHome = function() {
            $location.path('/');
        }
    });// end app.controller
};