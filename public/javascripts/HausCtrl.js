angular.module("haus", ['ui-notification', 'angular-loading-bar', 'chart.js'])

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

        (function(ChartJsProvider) {
            ChartJsProvider.setOptions({
                colors: ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
            });
        });
    })

    .run(function($rootScope) {
        $rootScope.apiUrl = "http://fofie.pagekite.me";
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
        };
        $scope.data =   [9,-2,-2,9,9,19,20];
        $scope.labels = ["01h", "03h", "06h", "08h", "12h", "14h", "16h", "19h", "21h"];
        $scope.options = {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'right'
                    }
                ]
            }
        };
        $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];

    });
