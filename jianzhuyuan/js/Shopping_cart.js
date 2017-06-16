/**
 * Created by Administrator on 2017/5/19.
 */
var app = angular.module("app", ["ngRoute"]);
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/one", {
            templateUrl: "Shopping_cart.html"
        })
//                .when("/two", {
//                    template: "<p>2222222</p>"
//                })
//                .when("/three", {
//                    template: "<p>3333333</p>"
//                })
//                .when("/four", {
//                    template: "<p>4444444</p>"
//                })
//                .otherwise({
//                    redirectTo: "/one"
//                })
}]);
app.controller("myCtrl", function ($scope, $http) {

    $scope.arr = [
        {"src":"../img/img_luyou.jpg","content":"06D401：吊车供电线1","contain":"路安装","price":50,"num":3,"total1":150},
        {"src":"../img/img_luyou.jpg","content":"06D401：吊车供电线2","contain":"路安装","price":60,"num":4,"total1":240}
    ];

    $scope.obj  = $scope.arr




    $http.get("../data/international_club.json").success(function (data) {
//            console.log(data)
        $scope.obj = data;
        console.log($scope.obj);

        //数量
        $scope.num = 3;

        //单价
        $scope.price = 50;

        //单个总价
        $scope.total = $scope.num * $scope.price;

        $scope.less = function () {
            $scope.num--;
            if ($scope.num <= 0) {
                $scope.num = 0
            }
        };

        $scope.plus = function () {
            $scope.num++
        };

        //数量
        $scope.num1 = 2;

        //单价
        $scope.price1 = 50;

        //单个总价
        $scope.total1 = $scope.num1 * $scope.price1;

        $scope.less1 = function () {
            $scope.num1--;
            if ($scope.num1 <= 0) {
                $scope.num1 = 0
            }
        };

        $scope.plus1 = function () {
            $scope.num1++
        };

        //删除效果
        $(".Pieces .img").click(function () {
            console.log(1111);
            $(this).parent().parent().remove()
        });

        //全选
        var aInp = $(".top input")
        $scope.all = function () {
            for (var i in aInp) {
                if (!$(".Settlement input").prop("checked")) {
                    aInp[i].checked = true

                } else {
                    aInp[i].checked = false
                }
            }
            // console.log($(".Settlement input").prop("checked"))
        };

    })
});




