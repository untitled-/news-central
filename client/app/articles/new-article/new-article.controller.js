'use strict';

angular.module('newsCentralApp')
  .controller('NewArticleCtrl', function ($scope, $http, $state) {
    $scope.newArticle = {
		active:true
	};
	
	$scope.addArticle = function() {
	  console.log($scope.newArticle);

      $http.post('/api/articles', $scope.newArticle);
      $scope.newArticle = '';
	  $state.transitionTo('articles');
    };
	
  });
