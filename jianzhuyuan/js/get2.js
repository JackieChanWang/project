/**
 * Created by Administrator on 2017/5/12.
 */
var app = angular.module("myapp",["ngRoute"])
app.controller("myCtrl",function ($scope,$http) {
    $http.get("../data/data.json").success(function (data) {
        // console.log(data)
        //../img/touxiang.png
        $scope.str = data.myself.img
        console.log($scope.str)
        //../img/img_jf.jpg



        $scope.str0=data.myself.img2
        console.log($scope.str0)
        $scope.str1 = data.myself.banner

        //Sever_98723
        $scope.str2= data.myself.banner2
        //
        $scope.str3= data.myself.banner3
    })
})