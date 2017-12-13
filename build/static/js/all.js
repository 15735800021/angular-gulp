var app = angular.module('starkapp',[
  'ngRoute',
  'controllers',
  'services'
])

// 注入子模块
angular.module('controllers',[]);
angular.module('services',[]);

app.config(['$routeProvider', '$locationProvider',
function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      template: '<h1>今天好冷哦！{{msg}}</h1>',
      controller: function ($scope) {
        $scope.msg = "是捏，就是好冷！";
      }
    })
      .when('/stark', {
        template: '<h1>this is stark page</h1>',
        controller: function ($scope) {
          $scope.msg = "是捏，就是好冷！";
        }
      })
      .when('/starkwang', {
        template: '<h1>this is starkwang page</h1>',
        controller: function ($scope) {
          $scope.msg = "是捏，嘿嘿！";
        }
      })
      .when('/shudong', {
        templateUrl: '/view/tpl.html',
        controller: function ($scope) {
          $scope.msg = "是捏，就是好冷！";
        }
      })
      .when('/goodslist', {
        templateUrl: '/view/goodsList.html',
        controller: 'GoodsController'
      })
      .when('/move', {
        templateUrl: '/view/move.html',
        controller: 'MoveController'
      });
      $locationProvider.html5Mode(true);
    // 需要在localhost下面运行
  }])
angular.module('starkapp').directive('appHead',[function() {
  return {
      restrict:'A',
      templateUrl:'/view/common/head.html'
  }
}])
angular.module('controllers').controller('GoodsController',[
  '$scope',
  '$route',
  '$routeParams',
  'GoodsService',
  function(
    $scope,
    $route,
    $routeParams,
    GoodsService
  ){
     GoodsService.fetchGoodsList().then(function(data){
       console.log(data);
       $scope.goodsList = data.data.data;
    });
  }])
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
angular.module('starkapp')
    .factory('GoodsService',['$http',function($http) {
      return{
        fetchGoodsList:function(){
          return $http.get('https://easy-mock.com/mock/59664d4d58618039284c7710/example/goods/list').then(function(data){
            return data;
          })
        }
      }
  
}])
angular.module('starkapp')
.factory('MoveService',['$http',function($http) {
  return{
    fetchMoveList:function(){
      return $http.get('https://easy-mock.com/mock/59664d4d58618039284c7710/example/movie').then(function(data){
        return data;
      })
    }
  }

}])