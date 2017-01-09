angular.module("haus", ['ui-notification', 'angular-loading-bar'])

.config(function(NotificationProvider, $interpolateProvider) {
    $interpolateProvider.startSymbol('[[').endSymbol(']]');
    NotificationProvider.setOptions({
        delay: 10000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'left',
        positionY: 'bottom'
    });
})

.controller('HausCtrl', function($scope, $http, Notification, $timeout) {

    $scope.an = true;
    /**
     ** Ask the py Via an httpCall the status of the lamp
     **/
    $timeout(function() {
        Notification.error({
            message: 'Server unreachable',
            title: 'error occurs'
        });
    }, 1200);


    $scope.getBrightnessStatus = function(apiUrl) {
        console.log(apiUrl);
    }

});
