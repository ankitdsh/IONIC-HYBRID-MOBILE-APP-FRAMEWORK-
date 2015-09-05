var marketApp = angular.module('ionicApp', ['ionic', 'highcharts-ng', 'ngCordova', 'ngDreamFactory'])
    .constant('DSP_URL', 'https://dsp-ankit-dsh-dev-1988.cloud.dreamfactory.com')
    .constant('DSP_API_KEY', 'demo')
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('slidemenu', {
                url: "/slide",
                abstract: true,
                templateUrl: "templates/slide.html",
                controller: "SlideMenuCtrl"
            })
            .state('slidemenu.home', {
                url: "/home",
                views: {
                    'appContent': {
                        templateUrl: "templates/home.html",
                        controller: "HomeCtrl"
                    }
                }
            })
            .state('slidemenu.equityList', {
                url: "/equityList",
                views: {
                    'appContent': {
                        templateUrl: "templates/equityList.html",
                        controller: "EquitiesCtrl"
                    }
                }
            })
            .state('slidemenu.mutualfunds', {
                url: "/mutualfunds",
                views: {
                    'appContent': {
                        templateUrl: "templates/mutualfundsDetails.html",
                        controller: "MutualFundsCtrl"
                    }
                }
            })
            .state('slidemenu.bonds', {
                url: "/bonds",
                views: {
                    'appContent': {
                        templateUrl: "templates/bondsDetails.html",
                        controller: "BondsCtrl"
                    }
                }
            })
            .state('slidemenu.equityDetail', {
                url: "/equityDetail",
                views: {
                    'appContent': {
                        templateUrl: "templates/equityDetail.html",
                        controller: "EquityDetailCtrl"
                    }
                }
            })
            .state('slidemenu.advanceChart', {
                url: "/advanceChart",
                views: {
                    'appContent': {
                        templateUrl: "templates/advanceChart.html",
                        controller: "advanceChartCtrl"
                    }
                }
            });

        $urlRouterProvider.otherwise("/slide/home");
    });