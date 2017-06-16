var app = angular.module("myApp",["ngRoute"])
app.controller("myCtrl",function ($scope,$http) {
    $http.get("../data/data.json").success(function (data) {
        $scope.str = data.myself.img
        $scope.str1 = data.myself.banner
        $scope.str0 = data.myself.banner0
        $scope.otime = data.myself.time
    })
})

