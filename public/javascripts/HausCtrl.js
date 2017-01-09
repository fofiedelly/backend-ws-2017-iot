angular.module("haus", ['ui-notification'])

.config(function(NotificationProvider) {
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

    /**
     ** Ask the py Via an httpCall the status of the lamp
     **/
     $timeout(function() {
       Notification.error({message: 'Server unreachable',  title: 'error occurs'});
     }, 1200)   ;

});
