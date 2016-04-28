var mockDataForThisTest = "json=" + encodeURI(JSON.stringify([
{
    id: 1,
    name: "Go For A Run In The San Diego Zoo Safari Park",
    description: "A half marathon on a trail running through the Safari Park, where animals roam free? Sounds like a barrel of monkeys (or rhinos).",
    location:[33.09745, -116.99572]},
{
    id: 2,
    firstName: "Play Tourist For The Afternoon With A Stroll Around Seaport Village",
    lastName: "It may be a touristy spot with lots of tourist trap shops selling hats and sunglasses, but it’s definitely worth the walk to get great views of the harbor and Coronado, or just to enjoy the breeze.",
    location:[32.70922, -117.17007]},
]));


var app = angular.module('myApp', []);

function LocationsCtrl($scope, $http) {

    $scope.locations = [];

    $scope.loadLocations = function() {
        var httpRequest = $http({
            method: 'POST',
            url: 'topspots.json',
            data: mockDataForThisTest

        }).success(function(data, status) {
            $scope.locations = data;
        });

    };

}