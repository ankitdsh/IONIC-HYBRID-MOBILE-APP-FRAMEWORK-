marketApp.controller('MainCtrl', ['$scope', 'DreamFactory', 'MyService', '$ionicSideMenuDelegate', 'Device', '$window', '$timeout', '$cordovaDevice', '$cordovaSplashscreen', '$cordovaVibration',
    function($scope, DreamFactory, MyService, $ionicSideMenuDelegate, Device, $window, $timeout, $cordovaDevice, $cordovaSplashscreen, $cordovaVibration) {

        $scope.device = {};
        document.addEventListener("deviceready", function() {
            $scope.device.device = JSON.stringify($cordovaDevice.getDevice());
            $scope.device.cordova = $cordovaDevice.getCordova();
            $scope.device.model = $cordovaDevice.getModel();
            $scope.device.platform = $cordovaDevice.getPlatform();
            $scope.device.uuid = $cordovaDevice.getUUID();
            $scope.device.version = $cordovaDevice.getVersion();
        }, false);
        // $cordovaSplashscreen.show();
        // $cordovaVibration.vibrate(200);
        $scope.logo = "img\\nsdl\\nsdl_icon.png";
        $scope.color = "#00ff00";
        $scope.body = {
            'color': '#000000'
        };
        $scope.home = {
            title: 'Portfolio'
        };

        $scope.theme = "dark";
        $scope.themeChange = function(theme) {
            $scope.theme = theme;

        };

        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };

        $scope.getWidth = function() {
            $scope.device = Device.getDeviceInfo($window);
        };
        // Adding FAST Click to remove touch delay in cordova and phonegap apps
        $(function() {
            FastClick.attach(document.body);
        });

        $scope.creds = {
            "body": {
                "email": 'guest@gmail.com',
                "password": 'samsung'
            }
        };

        // Login function
        $scope.loginFunc = function() {

            // Call to the DreamFactory user service using provided login method
            // Here was have passed in our success/error callbacks
            DreamFactory.api.user.login($scope.creds,

                // Success function
                function(result) {

                    // returned data will not be wrapped in a 'data' object

                    // Handle login success
                    alert('successful login!!!')
                    console.log(result);

                    // Params for call
                    $scope.callParams = {
                        table_name: 'todo',
                        params: {
                            limit: 10
                        }
                    }


                    // Function to call custom service
                    $scope.getRecords = (function() {

                        // call custom service built using DreamFactory that returns a promise
                        MyService.getRecords($scope.callParams).then(

                            // Success function
                            function(result) {

                                // We have a returned promise here.
                                // your data will be wrapped in a data object.
                                // result.data.record

                                // Do something with the record set
                                alert('results fetched')
                                console.log(result.data.record)
                            },

                            // Error function
                            function(reject) {

                                // Handle error
                                console.log(reject)
                                alert('errrr in  fetched')
                            });
                    })();





                },

                // Error function
                function(error) {

                    // Handle Login failure
                });
        };


        // $scope.TIME_ID = setInterval(function() {
        //     if (DreamFactory.isReady()) {
        //         //clear timeInterval and execute the login process
        //         clearInterval($scope.TIME_ID);
        //         $scope.loginFunc();
        //     }

        // }, 1000);

        $scope.$on('api:ready', function(e) {
            // Code goes here
            alert('DreamFactory is ready')
            $scope.loginFunc();
        });


        // $window.app = {};
        // $window.app.login = function() {
        //     var body = {
        //         email: 'ankit.dsh.dev@gmail.com',
        //         password: 'samsung'
        //     };
        //     $window.df.apis.user.login({
        //         body: body
        //     }, function(response) {
        //         //assign session token to be used for the session duration
        //         alert('Successful login');
        //         $window.authorizations.add("X-DreamFactory-Session-Token", new ApiKeyAuthorization("X-Dreamfactory-Session-Token", response.session_id, 'header'));
        //     }, function(response) {
        //         alert('Error on login');
        //         // document.getElementById("login-status").innerHTML = $window.app.getErrorString(response);
        //     });
        // };

        // $timeout(function() {
        //     $window.app.login();
        // }, 2000);



    }
]);


marketApp.controller('SlideMenuCtrl', ['$scope', '$ionicModal', 'SlideMenu', 'ModalService', '$timeout',
    function($scope, $ionicModal, SlideMenu, ModalService, $timeout) {

        var init = function() {
            $scope.slideMenuList = SlideMenu.getSlideMenu();
            $scope.slideMenuItemClick = function(itemID) {
                $scope.modalData = ModalService.getModal(itemID);
                $scope.openModal($scope.modalData);
            };
            $ionicModal.fromTemplateUrl('templates/modal.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function(modalObj) {
                $scope.modal.show();
                if (modalObj.callback)
                    $timeout(modalObj.callback, 1000);
            };
            $scope.closeModal = function() {
                $scope.modal.hide();
            };
            //Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function() {
                $scope.modal.remove();
            });
            // Execute action on hide modal
            $scope.$on('modal.hidden', function() {
                $scope.modalData = {}; //Cleaning Up Memory
                // Execute action
            });
            // Execute action on remove modal
            $scope.$on('modal.removed', function() {
                // Execute action
            });

        };



        $scope.initializeMaps = function initializeMaps() {
            var myLatlng = new google.maps.LatLng(19.1107149, 72.8807699);
            var mapOptions = {
                zoom: 15,
                center: myLatlng
            };
            var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                icon: 'http://finoux.com/images/logo.jpg',
                title: 'Finoux Solutions Pvt Ltd'
            });
        };

        init();
    }
]);

marketApp.controller('HomeCtrl', ['$scope', 'Home', 'Highchart', 'Device', '$window', '$timeout',
    function($scope, Home, Highchart, Device, $window, $timeout) {
        /*-------Initialization---------------*/

        $scope.summary = Home.getSummary();
        $scope.assets = Home.getAssets();
        $scope.chartConfig = Highchart.getColumnChartConfig(Device.getDeviceInfo($window)); //sending initial width to Highchart Service
        /*-------Initialization-End---------*/



        $($window).on("resize.doResize", function() { //Also $(window) works
            $timeout(function() {
                $scope.reflow();
            }, 1000); //Calling after 1000ms so slower device can adjust its Window-Width-Size 
        });
        $scope.$on("$destroy", function() {
            $($window).off("resize.doResize"); //remove the handler added earlier
        });

        $scope.reflow = function() {
            $scope.getWidth();
            $scope.chartConfig.size = {
                width: $scope.device.deviceWidth,
                height: ($scope.device.deviceWidth) / 2
            };
            // alert("w:" + $scope.device.deviceWidth + "H:" + $scope.device.deviceheight);
            $scope.$broadcast('highchartsng.reflow');
        };
    }
]);

marketApp.controller('EquitiesCtrl', ['$scope', 'Equities',
    function($scope, Equities) {

        $scope.equities = {};
        $scope.equities.summary = Equities.getEquitiesSummary();
        $scope.equities.list = Equities.getEquitiesList();

    }
]);

marketApp.controller('MutualFundsCtrl', ['$scope',
    function($scope) {

    }
]);

marketApp.controller('BondsCtrl', ['$scope',
    function($scope) {

    }
]);


marketApp.controller('EquityDetailCtrl', ['$scope', '$stateParams', 'Equities', 'Highchart', 'Device', '$window', '$timeout',

    function($scope, $stateParams, Equities, Highchart, Device, $window, $timeout) {
        $scope.params = $stateParams;

        $scope.equityDetails = {};
        $scope.equityDetails.summary = Equities.getEquityDetails('axis');
        $scope.equityDetails.stockChartConfig = Highchart.getEquityChartConfig(Device.getDeviceInfo($window));



        $($window).on("resize.stockChart", function() { //Also $(window) works
            $timeout(function() {
                $scope.reflow();
            }, 1000); //Calling after 1000ms so slower device can adjust its Window-Width-Size 
        });
        $scope.$on("$destroy", function() {
            $($window).off("resize.stockChart"); //remove the handler added earlier
        });
        $scope.reflow = function() {
            $scope.getWidth();
            $scope.equityDetails.stockChartConfig.size = {
                width: $scope.device.deviceWidth,
                height: ($scope.device.deviceWidth) / 2
            };
            // alert("w:" + $scope.device.deviceWidth + "H:" + $scope.device.deviceheight);
            $scope.$broadcast('highchartsng.reflow');
        };



    }
]);

marketApp.controller('advanceChartCtrl', ['$scope', '$stateParams', 'Equities', 'Highchart', 'Parse', 'Formula', 'Device', '$window', '$timeout', '$ionicPopup',

    function($scope, $stateParams, Equities, Highchart, Parse, Formula, Device, $window, $timeout, $ionicPopup) {
        $scope.params = $stateParams;
        var starttime = new Date();

        // $scope.equitySummary = Equities.getEquityDetails('axis');


        var init = function() {
            // ADVANCE_CHART:THIS IS CENTRAL HUB OF SAVING ALL CHART RELATED DATA ON THE SCOPE 
            // SAVE ALL THE CALCULATION OVER HERE AND USE THEM AGAIN AND AGAIN TILL THE PAGE IS RELOADED
            $scope.ADVANCE_CHART = {
                // chartLoaded: "hide-x",
                formulas: Formula.getInitParams(),
                redrawFormulas: Formula.redrawFormulas,

                drawAdvanceChart: function(data) {
                    $scope.getWidth();
                    $scope.ADVANCE_CHART.chartData = data;
                    $scope.ADVANCE_CHART.stockChartConfig = Highchart.getAdvanceChartConfig({
                        device: $scope.device,
                        seriesData: $scope.ADVANCE_CHART.chartData,
                        scope: $scope.ADVANCE_CHART
                    });
                    //Show the DIV after a Delay/ To Eliminate white HIghchart Background
                    // $scope.ADVANCE_CHART.chartLoaded = "show-x";
                    console.log('Total Time for fetching and calculation');
                    console.log(new Date() - starttime);
                    console.log('Milliseconds');
                }
            };

            $timeout(function() {
                Parse.fetch({
                    companyInfo: {
                        url: '../data/ohlcv.csv',
                        name: 'ICICI BANK',
                        exchange: 'NSE'
                    },
                    dataType: 'csv',
                    parseAs: 'hist',
                    range: 'hist',
                    plotOn: 'close',
                    timeInterpolation: false,
                    returnFileVolume: true,
                    callback: $scope.ADVANCE_CHART.drawAdvanceChart
                });
            }, 500);



            $scope.showConfirm = function() {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Select Formula',
                    scope: $scope,
                    templateUrl: 'templates/modals/formula.html'
                });
                confirmPopup.then(function(res) {
                    if (res) {

                        // 1.INITIATE CHART OBJECT 
                        //Chart Object is only required once the Formula popup is opened
                        // also saving Highcharts to early is not possible because of the rendering time 
                        $scope.ADVANCE_CHART.chart = $scope.ADVANCE_CHART.chart || $('#advanceChart').highcharts();




                        // 2.START FORMULA CALCULATIONS AFTER USERS CLICKS 'OK'

                        // save the formula for every range type eparately 
                        // like $scope.ADVANCE_CHART.chartData.formulae.hist and $scope.ADVANCE_CHART.chartData.formulae.week etc
                        // if (!$scope.ADVANCE_CHART.chartData.formulae /*|| RANGE.isChanged==true*/ ) {
                        Formula.generateFormulaData($scope.ADVANCE_CHART);
                        // }


                        // 3.START RENDERING THE FORMULAS THAT ARE CALCULATED PREVIOUSLY
                        //FORMULA CONTROLLER: USE THE CALCULATED DATA TO CREATE SERIES OBJECTS OF THE FORMULAS AND ADD THEM TO CHART OBJECT
                        Formula.manageFormulas($scope.ADVANCE_CHART);




                        // HIDE LOADING AFTER 500ms
                        $timeout(function() {
                            $scope.ADVANCE_CHART.chart.hideLoading();
                        }, 500);


                    } else {
                        // THIS WILL RESET THE POPUP'S TOGGLER FOR EACH FORMULA TO IT'S PREVIOUS STATE
                        Formula.resetPopup($scope.ADVANCE_CHART.formulas);
                    }
                });
            };

            $($window).on("resize.stockChart", function() { //Also $(window) works
                $timeout(function() {
                    $scope.reflow();
                }, 1000); //Calling after 1000ms so slower device can adjust its Window-Width-Size 
            });
            $scope.$on("$destroy", function() {
                $($window).off("resize.stockChart"); //remove the handler added earlier
            });
            $scope.reflow = function() {
                $scope.getWidth();
                $scope.ADVANCE_CHART.stockChartConfig.size = {
                    width: $scope.device.deviceWidth,
                    height: ($scope.device.deviceWidth / 2.1) //"2.1" is the Ratio of width/height on most devices 
                };
                // alert("w:" + $scope.device.deviceWidth + "H:" + $scope.device.deviceheight);
                $scope.$broadcast('highchartsng.reflow');
            };

        };


        // INITIATE THE FETCHING OF JSON/CSV AND CALL THE CALLBACK ONCE THE DATA ARRIVES


        init();
    }
]);




(function() {
    //Extending JavaScript Natives for formatting
    String.prototype.reverseMe = function() {
        return this.split("").reverse().join("");
    };
    Number.prototype.toIndian = function(decimals) {
        if (decimals < 0) { //if decimals is -1
            decimals = null;
        }
        var input = decimals !== null ? this.toFixed(decimals) : this.toString(),
            sign = '';
        if (this < 0) {
            input = input.substr(1);
            sign = '-'
        }
        var strSplit = input.split('.'),
            str = strSplit[0],
            decimals = strSplit[1],
            reverse = str.reverseMe(),
            units = reverse.substr(0, 3),
            thousands = reverse.substr(3).match(/[0-9]{1,2}/g);
        if (thousands) {
            thousands = thousands.join(',');
        }

        var result = ((thousands) ? units + ',' + thousands : units).reverseMe();
        if (decimals) {
            result += '.' + decimals;
        }
        if (sign) {
            result = sign + result;
        }

        return result;
    };
    Date.prototype.isSameDateAs = function(pDate) {
        return (
            this.getFullYear() === pDate.getFullYear() &&
            this.getMonth() === pDate.getMonth() &&
            this.getDate() === pDate.getDate()
        );
    };
    Date.prototype.toIndianDate = function(noDay) {
        noDay = noDay || false;
        var d = this.toDateString().split(' '),
            date = [d[2], d[1], d[3]],
            day = noDay ? '' : d[0] + ', ';
        return day + date.join(' ');
    };
    Date.prototype.toIndianDateTime = function(noDay) {
        var time = this.toTimeString().substr(0, 5);
        return this.toIndianDate(noDay) + ', ' + time;
    };
})();