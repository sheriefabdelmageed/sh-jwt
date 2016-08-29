'use strict';

angular.module('psJwtApp')
  .controller('RegisterCtrl', function ($scope,$http) {
    $scope.submit = function(){
        console.log('test');
        $http.post(url, user)
        .success(function(res){
            console.log('good!');
        })
        .error(function(err){
            console.log('bad!');
        })
    }
  });
