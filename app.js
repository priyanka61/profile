var app=angular.module("myApp",["ngRoute"]);
app.controller("myCtr",function($scope){
$scope.message="hello";
});
app.config(["$routeProvider",function($routeProvider){

$routeProvider.when("/profile",{
    templateUrl:"/view/profile.html"
}).when("/projects",{
    templateUrl:"/view/projects.html"
}).otherwise({
    redirectTo:'/projects'
 })
}]);