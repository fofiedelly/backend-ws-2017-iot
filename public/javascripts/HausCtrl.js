angular.module("haus", ['ui-notification', 'angular-loading-bar'])

.config(function(NotificationProvider, $interpolateProvider) {
    $interpolateProvider.startSymbol('[[').endSymbol(']]');
    NotificationProvider.setOptions({
        delay: 3000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'left',
        positionY: 'bottom'
    });
})

.run(function($rootScope) {
    $rootScope.apiUrl = "http://localhost:5000";
})

.controller('HausCtrl', function($scope, $http, Notification, $timeout, $rootScope, $interval) {

    getValue();
    $scope.an = true;
    /**
     ** Ask the py Via an httpCall the status of the lamp
     **/
    $interval(getValue, 60000);

    function getValue() {
        $http({
            method: 'GET',
            url: $rootScope.apiUrl + "/status/photo"
        }).then(function successCallback(response) {
            var value = Number(response.data);
            value = value < 5 ? 5 : value > 30 ? 30 : value;
            $scope.lightValue = value;
            $scope.style = {
                "opacity": $scope.lightValue / 100
            };
            Notification.success({
                message: 'Brightness status in the Room fetched: ' + $scope.lightValue,
                title: 'Aktualisiert'
            });
        }, function errorCallback(response) {
            Notification.error({
                message: 'Server unreachable',
                title: 'error occurs'
            });
        });


    }
    $scope.getBrightnessStatus = function(apiUrl) {
        console.log(apiUrl);
    }

});
