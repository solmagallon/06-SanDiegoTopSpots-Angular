
$(function() {

	$.getJSON("topspots.json", function(list){
		var items = '';
		
	});

var objList = list;
		var tbody = $("<tbody><tbody>")

});


var myApp = angular.module('myApp',[]);

myApp.controller('DemoController', ['$scope', '$http', function($scope, $http){

activate();

function activate() {
	$http({
	method: 'GET',
	url: 'topspots.json'
	}).then(function (response) {

	 });

}


var self = this;
var data = [{name: "Moroni", age: 50} /*,*/];
self.tableParams = new NgTableParams({}, { dataset: data});