/*jslint node: true */
"use stict";

module.exports = function(app) {

    app.controller("SearchCardsController", function($scope, $http, $location) {
        $scope.currentPage = 0;
        $scope.cardsPerPage = 5;
        var cards = {};

        $scope.getAllCards = function() {
            $http({
                method : "GET",
                url : "/api/cards"
            })
            .success(function(dbcards, status, headers, config) {
                cards = dbcards;
                $scope.cards = cards;
                //return cards;
            })
            .error(function(dbcards, status, headers, config) {
                console.log("There was and error: " + dbcards);
            });
        }

        $scope.getAllCards();

        $scope.predicate = "cardName";
        $scope.deleteMessage = false;
        console.log(cards);

        $scope.deleteCard = function(card) {
            $http.delete("api/cards/" + card._id, card)
                .success(function() {
                    console.log(card._id);
                    $scope.getAllCards();
                    $scope.deleteMessage  = true;
                    $scope.message = "You have deleted " + card.cardName;
                })
                .error(function(data) {
                    console.log(data);
                });
        }

        $scope.editCard = function(card) {
            console.log(card._id);
            $location.path(card._id);
        }

    });// end app.controller

};// end module.exports