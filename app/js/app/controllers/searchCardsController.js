/*jslint node: true */
"use stict";

module.exports = function(app) {

    app.controller("SearchCardsController", function($scope, $http) {
        $scope.currentPage = 0;
        $scope.cardsPerPage = 5;
        var cards = {};

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
            //return cards;

        // $http({
        //     method : "GET",
        //     url : "/api/cards"
        // })
        // .success(function(data, status, headers, config) {
        //     cards = data;
        //     console.log(cards);
        //     return cards;

        // })
        // .error(function(data, status, headers, config) {
        //     console.log(data);
        // });
        $scope.predicate = "cardName";
        console.log(cards);
        // $scope.prevPage = function() {
        //     if($scope.currentPage > 0) {
        //         $scope.currentPage--;
        //     }
        // };
        // $scope.prevPageDisabled = function() {
        //     return $scope.currentPage === 0 ? "disabled" : "";
        // };
        // $scope.pageCount = function() {
        //     return Math.ceil($scope.cards.length/$scope.cardsPerPage)-1;
        // }
        // $scope.nextPage = function() {
        //     if($scope.currentPage < $scope.pageCount()) {
        //         $scope.currentPage++;
        //     }
        // };
        // $scope.nextPageDisabled = function() {
        //     return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
        // };

    });// end app.controller

    // app.filter('offset', function() {
    //     return function(input, start) {
    //         start = parseInt(start, 10);
    //         return input.slice(start);
    //     };
    // });// end app.filter
};// end module.exports