angular.module('controllers').controller('MoveController',[
    '$scope',
    '$route',
    '$routeParams',
    'MoveService',
    function(
      $scope,
      $route,
      $routeParams,
      MoveService
    ){
       MoveService.fetchMoveList().then(function(data){
         $scope.move = data.data.subjects; 
         console.log(data.data.subjects);
      });
    }])