angular.module("menu")
    .controller('mainCtrl', function($scope, $http) {


            $scope.test = "test";
            $scope.getFood = function() {
              $http({
                method: 'GET',
                url: '/api/food'
              }).then(function(response) {
                  console.log(response);
                  $scope.foods = response.data;
              });
            };

            $scope.getReview = function(foodId, reviewId) {
                  return $http({
                    method: 'GET',
                    url: '/api/food/review?foodId=' + foodId + '&reviewId=' + reviewId
                  }).then(function(response) {
                      $scope.selectedReview = response.data;
                  });

            };

            $scope.deleteFood = function(foodId) {
                $http.delete('/api/food/' + foodId);
                $scope.getFood();
            };

            $scope.getFood();
    });
