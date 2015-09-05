marketApp.factory('Home', function() {

    var summary = {},
        assets = [];

    var getSummary = function(id) {
        setSummary();
        return summary;
    };

    var getAssets = function(id) {
        setAllAssets();
        return assets;
    };

    var setSummary = function(id) {
        summary = {
            leftHeader: "TOTAL VALUE OF HOLDINGS",
            amount: "Rs.50,00,000",
            date: "31 JUL,2014",
            time: "1:30PM",
            gain: "12,905",
            gainPer: "33.1",
            gainClass: "fs-x-green",
            arrowUrl: "img/up_arrow.png",
            prevText: "PREV.VALUE",
            prevValue: "Rs.50,10,204",
            prevDate: "30 JUL, 2014",
            prevTime: "3.30PM"
        };
    };

    var setAllAssets = function(id) {
        assets.push({
            name: "equity",
            value: "Rs.1,23,46,678",
            change: "change",
            changeValue: 'Rs.204.50',
            changePercent: "(3.14%)",
            backCardColor: 'equityHomeCard',
            arrowUrl: "img/up_arrow.png",
            cardClass: "greenBG",
            url: '#/slide/equityList'
        }, {
            name: "mutual funds",
            value: "Rs.4,23,46,678",
            change: "change",
            backCardColor: 'mfHomeCard',
            changeValue: 'Rs.204.50',
            changePercent: "(3.14%)",
            arrowUrl: "img/up_arrow.png",
            cardClass: "greenBG",
            url: '#/slide/mutualfunds'
        }, {
            name: "bonds",
            value: "Rs.98,23,46,678",
            change: "change",
            backCardColor: 'bondsHomeCard',
            changeValue: 'Rs.204.50',
            changePercent: "(3.14%)",
            arrowUrl: "img/down_arrow.png",
            cardClass: "redBG",
            url: '#/slide/bonds'
        });
    };

    return {
        getSummary: getSummary,
        setSummary: setSummary,
        getAssets: getAssets,
        setAllAssets: setAllAssets,
    };
});

marketApp.factory('SlideMenu', function() {
    var slideMenuLists = {};

    var getSlideMenuLists = function() {
        setSlideMenuLists();
        return slideMenuLists;
    };

    var setSlideMenuLists = function() {

        slideMenuLists = [{
            id: '0',
            text: 'My Profile',
            url: '#/slide/home',
            iconUrl: 'img/menu/person.png',
            class: 'ion-ios7-person'
        }, {
            id: '1',
            text: 'Settings',
            url: '#/slide/home',
            iconUrl: 'img/menu/settings.png',
            class: 'ion-android-settings'
        }, {
            id: '2',
            text: 'Themes',
            url: '#/slide/home',
            iconUrl: 'img/menu/settings.png',
            class: 'ion-ios7-monitor'
        }, {
            id: '3',
            text: 'Contact Us',
            url: '',
            iconUrl: 'img/menu/log-out.png',
            class: 'ion-ios7-telephone'
        }, {
            id: '4',
            text: 'About Us',
            url: '',
            iconUrl: 'img/menu/log-out.png',
            class: 'ion-ios7-people'
        }, {
            id: '5',
            text: 'Locate Us',
            url: '',
            iconUrl: 'img/menu/android-location.png',
            class: 'ion-android-location'
        }, {
            id: '6',
            text: 'Device Info',
            url: '',
            iconUrl: 'img/menu/iphone.png',
            class: 'ion-iphone'
        }, {
            id: '7',
            text: 'Sign-Out',
            url: '',
            iconUrl: 'img/menu/log-out.png',
            class: 'ion-log-out'
        }]
    };

    return {
        getSlideMenu: getSlideMenuLists
    };
});

marketApp.factory('ModalService', function() {

    var modalObj = [{
        header: 'My Profile',
        bodyContent: '<div>Profile content</div>',
        templateUrl: 'templates/modals/profile.html'
    }, {
        header: 'Settings',
        bodyContent: '<div>Settings content</div>',
        templateUrl: 'templates/modals/settings.html'
    }, {
        header: 'Themes',
        bodyContent: '<div>themes content</div>',
        templateUrl: 'templates/modals/theme.html'
    }, {
        header: 'Contact Us',
        bodyContent: '<div>Contact Us content</div>',
        templateUrl: 'templates/modals/contact-us.html'
    }, {
        header: 'About Us',
        bodyContent: '<div>About Us content</div>',
        templateUrl: 'templates/modals/about-us.html'
    }, {
        header: 'Locate Us',
        bodyContent: '<div>Locate Us content</div>',
        templateUrl: 'templates/modals/locate-us.html',
        callback: function initializeMaps() {
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
        }
    }, {
        header: 'Device Info',
        bodyContent: '<div>Device Info content</div>',
        templateUrl: 'templates/modals/device.html'
    }, {
        header: 'Sign Out',
        bodyContent: '<div>temp content</div>',
        templateUrl: 'templates/modals/log-out.html'
    }];

    function getModalObj(modalID) {
        return modalObj[modalID];
    };

    return {
        getModal: getModalObj
    };
});

marketApp.factory('Device', function() {
    var deviceWidth = 0;
    deviceheight = 0;

    var getDeviceInfo = function(win) {
        deviceWidth = (win.screen.width) ? win.screen.width : win.screen.height;
        deviceheight = (win.screen.height) ? win.screen.height : win.screen.width;
        device = "moto G";
        //deviceWidth = window.screen.width;
        // iOS returns available pixels, Android returns pixels / pixel ratio
        // http://www.quirksmode.org/blog/archives/2012/07/more_about_devi.html
        /* if (win.navigator.userAgent.indexOf('Android') >= 0 && win.devicePixelRatio) {
                 deviceWidth = deviceWidth / win.devicePixelRatio;
             }*/

        return {
            device: device,
            deviceWidth: deviceWidth,
            deviceheight: deviceheight
        };
    };

    return {
        getDeviceInfo: getDeviceInfo
    };
});

marketApp.factory('Equities', function() {
    var equitiesList = [],
        equitiesSummary = {},
        equityDetails = {},
        equityGraphDetails = {};


    var getEquitiesSummary = function(id) {
        setEquitiesSummary(id);
        return equitiesSummary;
    };
    var getEquitiesList = function(id) {
        setEquitiesList(id);
        return equitiesList;
    };
    var getEquityDetails = function(id) {
        setEquityDetails(id);
        return equityDetails;
    };
    var getEquityGraphDetails = function(id) {
        setEquityGraphDetails(id);
        return equityGraphDetails;
    };
    var setEquityDetails = function(id) {
        equityDetails = {
            name: 'ICICI BANK',
            amount: "Rs.5,23,109",
            isin: 'INE090A0345122',
            date: "26 NOV 2014",
            time: "15:30",
            changeValue: "RS.204.50",
            changePercent: "3.12",
            arrowUrl: "img/up_arrow.png",
            cardClass: 'greenBG',
            stockReturn: [{
                horizon: "1Mth",
                stock: 3.2,
                stockUp: true,
                nifty: 2.8,
                niftyUp: false
            }, {
                horizon: "3Mth",
                stock: 6.2,
                stockUp: true,
                nifty: 4.8,
                niftyUp: true
            }, {
                horizon: "6Mth",
                stock: 2.1,
                stockUp: false,
                nifty: 2.8,
                niftyUp: false
            }, {
                horizon: "1Y",
                stock: 1.2,
                stockUp: true,
                nifty: 1.8,
                niftyUp: true
            }, {
                horizon: "2Y",
                stock: 1.2,
                stockUp: false,
                nifty: 1.8,
                niftyUp: true
            }]

        };

    };

    var setEquityGraphDetails = function(id) {
        //call http chart json here
    };


    var setEquitiesSummary = function() {
        equitiesSummary = {
            amount: "Rs.5,23,109",
            date: "26 NOV 2014",
            time: "15:30",
            changeValue: "RS.204.50",
            changePercent: "3.12",
            arrowUrl: "img/up_arrow.png"

        };

    };
    var setEquitiesList = function() {
        equitiesList.push({
            id: 0,
            name: "ICICI Bank",
            isin: "INE090A010034",
            lastTRXDate: "11 Jul, 2014",
            lastTRXTime: "15:32",
            profit: true,
            changeValue: "4,000",
            latestPrice: "1,000",
            shares: "200",
            latestValue: "2,00,000",
            previousValue: "1,96,000",
            daysChange: "20",
            changePercent: "2.04",
            changeProfit: true,
            url: '#/slide/equityDetail?id=icici'
        });

        equitiesList.push({
            id: 1,
            name: "AXIS Bank",
            isin: "INEHVH5674GH",
            lastTRXDate: "11 Jul, 2014",
            lastTRXTime: "12:32",
            profit: true,
            changeValue: "54,54,000",
            latestPrice: "1,21,000",
            shares: "200",
            latestValue: "2,00,000",
            previousValue: "1,96,000",
            daysChange: "205",
            changePercent: "2.04",
            changeProfit: false,
            url: '#/slide/equityDetail?id=axis'
        });

        equitiesList.push({
            id: 0,
            name: "HDFC Bank",
            isin: "INEKJBH43463",
            lastTRXDate: "11 Jul, 2014",
            lastTRXTime: "15:32",
            profit: false,
            changeValue: "25,34,000",
            latestPrice: "18,000",
            shares: "200",
            latestValue: "2,00,000",
            previousValue: "1,96,000",
            daysChange: "2",
            changePercent: "2.04",
            changeProfit: true,
            url: '#/slide/equityDetail?id=hdfc'
        });

        equitiesList.push({
            id: 0,
            name: "ICICI Bank",
            isin: "INE090A010034",
            lastTRXDate: "11 Jul, 2014",
            lastTRXTime: "15:32",
            profit: true,
            changeValue: "4,000",
            latestPrice: "1,000",
            shares: "200",
            latestValue: "2,00,000",
            previousValue: "1,96,000",
            daysChange: "20",
            changePercent: "2.04",
            changeProfit: true,
            url: '#/slide/equityDetail?id=icici'
        });

        equitiesList.push({
            id: 1,
            name: "AXIS Bank",
            isin: "INEHVH5674GH",
            lastTRXDate: "11 Jul, 2014",
            lastTRXTime: "12:32",
            profit: true,
            changeValue: "54,54,000",
            latestPrice: "1,21,000",
            shares: "200",
            latestValue: "2,00,000",
            previousValue: "1,96,000",
            daysChange: "205",
            changePercent: "2.04",
            changeProfit: false,
            url: '#/slide/equityDetail?id=axis'
        });

        equitiesList.push({
            id: 0,
            name: "HDFC Bank",
            isin: "INEKJBH43463",
            lastTRXDate: "11 Jul, 2014",
            lastTRXTime: "15:32",
            profit: false,
            changeValue: "25,34,000",
            latestPrice: "18,000",
            shares: "200",
            latestValue: "2,00,000",
            previousValue: "1,96,000",
            daysChange: "2",
            changePercent: "2.04",
            changeProfit: true,
            url: '#/slide/equityDetail?id=hdfc'
        });
        equitiesList.push({
            id: 0,
            name: "ICICI Bank",
            isin: "INE090A010034",
            lastTRXDate: "11 Jul, 2014",
            lastTRXTime: "15:32",
            profit: true,
            changeValue: "4,000",
            latestPrice: "1,000",
            shares: "200",
            latestValue: "2,00,000",
            previousValue: "1,96,000",
            daysChange: "20",
            changePercent: "2.04",
            changeProfit: true,
            url: '#/slide/equityDetail?id=icici'
        });

        equitiesList.push({
            id: 1,
            name: "AXIS Bank",
            isin: "INEHVH5674GH",
            lastTRXDate: "11 Jul, 2014",
            lastTRXTime: "12:32",
            profit: true,
            changeValue: "54,54,000",
            latestPrice: "1,21,000",
            shares: "200",
            latestValue: "2,00,000",
            previousValue: "1,96,000",
            daysChange: "205",
            changePercent: "2.04",
            changeProfit: false,
            url: '#/slide/equityDetail?id=axis'
        });

        equitiesList.push({
            id: 0,
            name: "HDFC Bank",
            isin: "INEKJBH43463",
            lastTRXDate: "11 Jul, 2014",
            lastTRXTime: "15:32",
            profit: false,
            changeValue: "25,34,000",
            latestPrice: "18,000",
            shares: "200",
            latestValue: "2,00,000",
            previousValue: "1,96,000",
            daysChange: "2",
            changePercent: "2.04",
            changeProfit: true,
            url: '#/slide/equityDetail?id=hdfc'
        });
    };

    return {
        getEquitiesSummary: getEquitiesSummary,
        getEquitiesList: getEquitiesList,
        getEquityDetails: getEquityDetails,
        getEquityGraphDetails: getEquityGraphDetails
    };

});

marketApp.factory('Highchart', function() {

    var columnChartConfig = {},
        equityChartConfig = {};
    advanceChartConfig = {};


    var getColumnChartConfig = function(device) {
        setColumnChartConfig(device);
        return highchartConfig;
    };

    var getEquityChartConfig = function(device) {
        setEquityChartConfig(device);
        return equityChartConfig;
    };

    var getAdvanceChartConfig = function(params) {
        setAdvanceChartConfig(params);
        return advanceChartConfig;
    };

    var setColumnChartConfig = function(device) {
        highchartConfig = {
            //This is not a highcharts object. It just looks a little like one!
            options: {
                //This is the Main Highcharts chart config. Any Highchart options are valid here.
                //will be ovverriden by values specified below.
                chart: {
                    type: 'column',
                    backgroundColor: 'rgba(255,255,255,0)',
                    margin: [25, 25, 25, 5],
                    spacing: [0, 0, 0, 0],
                    reflow: true,
                    renderTo: 'portfolioChart',
                    options3d: {
                        enabled: true,
                        alpha: 8,
                        beta: 0,
                        depth: 30

                    }
                },
                color: ['#4e81a3', '#333'],
                legend: {
                    enabled: false
                },
                plotOptions: {
                    column: {
                        depth: 20
                    }
                },
                xAxis: {
                    type: 'datetime',
                    tickColor: '#000000',
                    tickLength: 3,
                    gridLineDashStyle: 'dot',
                    gridLineWidth: 1,
                    gridZIndex: 1,
                    tickWidth: 1,
                    showFirstLabel: true,
                    showLastLabel: true,
                    lineColor: '#666',
                    lineWidth: 5
                },
                yAxis: {
                    gridLineColor: '#666',
                    gridLineDashStyle: 'dot',
                    gridLineWidth: 1,
                    gridZIndex: 1,
                    showFirstLabel: true,
                    showLastLabel: true,
                    title: {
                        text: null
                    },
                    labels: {
                        align: 'left',
                        x: 1,
                        y: -3,
                        overflow: 'justify'
                    }
                },
                zAxis: {

                    gridLineDashStyle: 'dot',

                    gridLineWidth: 1,
                    gridZIndex: 1,
                },
                tooltip: {
                    style: {
                        fontWeight: 'bold'
                    }
                }
            },
            //The below properties are watched separately for changes.

            //Series object (optional) - a list of series using normal highcharts series options.
            series: [{
                name: 'PORTFOLIO VALUE',
                color: '#12c782',
                data: [10, 15, 12, 8, 7, 9, 12, 15, 7, 8, 17, 7]
            }],
            //Title configuration (optional)
            title: {
                text: null
            },
            //Boolean to control showng loading status on chart (optional)
            //Could be a string if you want to show specific loading text.
            loading: false,
            //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
            //properties currentMin and currentMax provied 2-way binding to the chart's maximimum and minimum
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            //Whether to use HighStocks instead of HighCharts (optional). Defaults to false.
            useHighStocks: false,
            //size (optional) if left out the chart will default to size of the div or something sensible.
            size: {
                width: device.deviceWidth,
                height: (device.deviceWidth / 2)
            },
            //function (optional)
            func: function(chart) {
                //setup some logic for the chart
            }
        }
    };

    var setEquityChartConfig = function(device) {

        equityChartConfig = {
            //This is not a highcharts object. It just looks a little like one!
            options: {
                //This is the Main Highcharts chart config. Any Highchart options are valid here.
                //will be ovverriden by values specified below.
                chart: {
                    type: 'area',
                    backgroundColor: 'rgba(255,255,255,0)',
                    margin: [15, 25, 25, 10], //TRBL
                    spacing: [0, 0, 0, 0],
                    reflow: true,
                    renderTo: 'stockChart',
                    // zoomType: 'x'
                },
                color: ['#08283d'],
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#08283d'],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 0
                        },
                        lineWidth: 2,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        month: '%b %Y',
                        year: '%Y'
                    },
                    tickColor: '#000000',
                    tickLength: 3,
                    tickWidth: 1,
                    showFirstLabel: true,
                    showLastLabel: true,
                    lineColor: '#666',
                    lineWidth: 0
                },
                yAxis: {
                    gridLineColor: '#666',
                    gridLineDashStyle: 'dot',
                    gridLineWidth: 1,
                    gridZIndex: 1,
                    showFirstLabel: true,
                    showLastLabel: true,
                    title: {
                        text: null
                    },
                    labels: {
                        align: 'left',
                        x: 1,
                        y: -3,
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    style: {
                        fontWeight: 'bold'
                    }
                }
            },
            //The below properties are watched separately for changes.

            //Series object (optional) - a list of series using normal highcharts series options.
            series: [{
                name: 'axis',
                color: '#08283d',
                data: stockChartDataArr
            }],
            //Title configuration (optional)
            title: {
                text: null
            },
            //Boolean to control showng loading status on chart (optional)
            //Could be a string if you want to show specific loading text.
            loading: false,
            //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
            //properties currentMin and currentMax provied 2-way binding to the chart's maximimum and minimum
            /* xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },*/
            //Whether to use HighStocks instead of HighCharts (optional). Defaults to false.
            useHighStocks: false,
            //size (optional) if left out the chart will default to size of the div or something sensible.
            size: {
                width: device.deviceWidth,
                height: (device.deviceWidth / 2)
            },
            //function (optional)
            func: function(chart) {
                //setup some logic for the chart
            }
        }
    };

    var setAdvanceChartConfig = function(params) {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
        // var orgHighchartsRangeSelectorPrototypeRender = Highcharts.RangeSelector.prototype.render;
        // Highcharts.RangeSelector.prototype.render = function(min, max) {
        //     orgHighchartsRangeSelectorPrototypeRender.apply(this, [min, max]);
        //     var leftPosition = this.chart.plotLeft,
        //         topPosition = this.chart.plotTop - 70,
        //         space = 2;
        //     this.zoomText.attr({
        //         x: leftPosition,
        //         y: topPosition
        //     });
        //     leftPosition += this.zoomText.getBBox().width;
        //     for (var i = 0; i < this.buttons.length; i++) {
        //         this.buttons[i].attr({
        //             x: leftPosition,
        //             y: topPosition
        //         });
        //         leftPosition += this.buttons[i].width + space;
        //     }
        // };



        advanceChartConfig = {
            //This is not a highcharts object. It just looks a little like one!
            options: {
                //This is the Main Highcharts chart config. Any Highchart options are valid here.
                //will be ovverriden by values specified below.
                chart: {
                    type: 'line',
                    backgroundColor: 'rgba(255,255,255,0)',
                    margin: [0, 15, 20, 0], //TRBL
                    spacing: [0, 0, 0, 0],
                    reflow: true,
                    events: {
                        load: function() {
                            console.log('loaded');
                        },
                        redraw: function() {
                            // 1.get first and last plot points
                            // 2.call external function redrawFormula(); with the new points
                            var first = this.series[0].processedXData[0];
                            var last = this.series[0].processedXData[(this.series[0].processedXData.length - 1)];
                            console.log('Redraw:- FIRST Point:' + new Date(first) + '& LAST Point:' + new Date(last));
                            // params.scope.chartData.firstDataPoint = first;
                            // params.scope.chartData.lastDataPoint = last;
                            // params.scope.redrawFormulas(params.scope);
                        }
                    },

                    renderTo: 'advanceChart',
                    panning: true,
                    pinchType: 'x',
                    zoomType: 'x'
                },
                color: ['#08283d'],
                legend: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                navigator: {
                    enabled: false
                },
                scrollbar: {
                    enabled: false
                },
                rangeSelector: {
                    selected: 5,
                    inputEnabled: false,
                    buttons: [{
                        type: 'month',
                        count: 1,
                        text: '1M'
                    }, {
                        type: 'month',
                        count: 3,
                        text: '3M'
                    }, {
                        type: 'month',
                        count: 6,
                        text: '6M'
                    }, {
                        type: 'year',
                        count: 1,
                        text: '1Y'
                    }, {
                        type: 'year',
                        count: 2,
                        text: '2Y'
                    }, {
                        type: 'year',
                        count: 5,
                        text: '5Y'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                    buttonTheme: { // styles for the buttons
                        fill: '#3b3b3b',
                        // width: 30,
                        // height: 25,


                        style: {
                            color: '#fff',


                            fontFamily: 'Helvetica Neue, Roboto, sans-serif'
                            // fontWeight: 'bold'
                        },
                        states: {
                            hover: {},
                            select: {
                                fill: '#fab70f',
                                style: {
                                    color: '#fff'
                                }
                            }
                        }
                    }
                },
                plotOptions: {
                    series: {
                        animation: {
                            duration: 1000,
                            easing: 'linear'
                        }
                    },
                    area: {
                        series: {
                            animation: {
                                duration: 1000,
                                easing: 'linear'
                            }
                        },
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#08283d'],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 0
                        },
                        lineWidth: 2,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        month: '%b %Y',
                        year: '%Y'
                    },
                    events: {
                        afterSetExtremes: function(e) {
                            params.scope.chartData.firstDataPoint = e.min;
                            params.scope.chartData.lastDataPoint = e.max;
                            params.scope.redrawFormulas(params.scope);

                            console.log('AFTERSETEXTREMES: e.min: ' + new Date(e.min) +
                                ' | e.max: ' + new Date(e.max) + ' | e.trigger: ' + e.trigger);
                        },
                        // setExtremes: function(e) {
                        //     params.scope.chartData.firstDataPoint = e.min;
                        //     params.scope.chartData.lastDataPoint = e.max;
                        //     params.scope.redrawFormulas(params.scope);


                        //     console.log('SETEXTREMES    : e.min: ' + new Date(e.min) +
                        //         ' | e.max: ' + new Date(e.max) + ' | e.trigger: ' + e.trigger);
                        // }

                    },
                    labels: {
                        y: 12

                        // formatter: function() {
                        //     if (this.isFirst || this.isLast) {
                        //         return Highcharts.dateFormat(this.dateTimeLabelFormat, this.value);
                        //     } else {
                        //         return null;
                        //     }
                        // }
                    },
                    offset: 0,
                    tickColor: '#000000',
                    tickLength: 3,
                    tickWidth: 0,
                    showFirstLabel: true,
                    showLastLabel: true,
                    lineColor: '#333',
                    lineWidth: 1
                },
                yAxis: [{
                    gridLineColor: '#666',
                    gridLineDashStyle: 'dot',
                    gridLineWidth: 1,
                    gridZIndex: 1,
                    opposite: false,
                    showFirstLabel: true,
                    showLastLabel: true,
                    startOnTick: false,
                    endOnTick: false,
                    title: {
                        text: 'OHLC'
                    },
                    height: '85%',
                    labels: {
                        align: 'left',
                        x: 1,
                        y: -3,
                        overflow: 'justify',
                        formatter: function() {
                            return 'Rs.' + this.value.toIndian();
                            /* if (this.isFirst || this.isLast) {
                                                            return 'Rs.' + this.value.toIndian();
                                                        } else {
                                                            return null
                                                        }*/


                        }
                    }
                }, {
                    gridLineWidth: 0,
                    showFirstLabel: true,
                    showLastLabel: false,
                    opposite: false,
                    title: {
                        text: null
                    },
                    labels: {
                        enabled: false,
                        align: 'left',
                        x: 1,
                        y: -3,
                        overflow: 'justify',
                        formatter: function() {
                            if (this.isFirst || this.isLast) {
                                return this.value.toIndian();
                            } else {
                                return null
                            }
                        }
                    },
                    top: '80%',

                    height: '20%',
                    offset: 0,
                    lineWidth: 0
                }],
                tooltip: {
                    valueDecimals: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.65)",
                    // backgroundColor: {
                    //     linearGradient: {
                    //         x1: 0,
                    //         y1: 0,
                    //         x2: 0,
                    //         y2: 1
                    //     },
                    //     stops: [
                    //         [0, 'rgba(255, 255, 255, 0.65)'],
                    //         [1, 'rgba(255, 255, 255, 0.65)']
                    //     ]
                    // },
                    positioner: function() {
                        return {
                            x: 10,
                            y: 35
                        };
                    },
                    shadow: false,
                    style: {
                        fontWeight: 'bold'
                    }
                }
            },
            //The below properties are watched separately for changes.
            //Series object (optional) - a list of series using normal highcharts series options.
            series: [{
                name: (params.companyInfo && params.companyInfo.name) || 'series',
                type: 'line',
                lineWidth: 5,
                color: '#4e81a3',
                data: params.seriesData.array
            }, {
                type: 'column',
                name: 'Volume',
                color: '#333',
                yAxis: 1,
                data: params.seriesData.volume
            }],
            //Title configuration (optional)
            title: {
                text: null
            },
            //Boolean to control showng loading status on chart (optional)
            //Could be a string if you want to show specific loading text.
            loading: false,
            //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
            //properties currentMin and currentMax provied 2-way binding to the chart's maximimum and minimum
            /* xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },*/
            //Whether to use HighStocks instead of HighCharts (optional). Defaults to false.
            useHighStocks: true,
            //size (optional) if left out the chart will default to size of the div or something sensible.
            size: {
                width: params.device.deviceWidth,
                height: Math.round(params.device.deviceWidth / 2.1) //"2.1" is the Ratio of width/height on most devices 
            },
            //function (optional)
            func: function(chart) {
                //setup some logic for the chart
            }
        };


    };

    return {
        getColumnChartConfig: getColumnChartConfig,
        getEquityChartConfig: getEquityChartConfig,
        getAdvanceChartConfig: getAdvanceChartConfig
    };
});

marketApp.factory('Parse', function($http) {

    var fetch = function(args) {

        $http.get(args.companyInfo.url).
        success(function(data, status, headers, config) {
            /*      check datatype and run through the parsing here
                    and then once done return the data to be stored in the scope    */
            args.data = ohlcvStr;
            args.dataType == 'csv';
            // args.data = (args.dataType == 'json') ? data.ohlcv : data;//ANKITZ disabled temporary for building android apk(android JSON fetching issue)
            args.callback(parseHighStock(args));

        }).
        error(function(data, status, headers, config) {
            args.data = ohlcvStr;
            args.callback(parseHighStock(args));

        });

    };


    var getParsedData = function(data) {
        var ohlc = [],
            volume = [];

        // calculate the time required for this function to run

        for (var i = 0; i < data.length; i += 1) {
            ohlc.push([
                data[i][0], // the date
                data[i][1], // open
                data[i][2], // high
                data[i][3], // low
                data[i][4] // close
            ]);
            volume.push([
                data[i][0], // the date
                data[i][5] // the volume
            ]);
        }

        return {
            data: data,
            ohlc: ohlc,
            volume: volume
        }
    };

    var parseHighStock = function(args) {
        try {
            var ONE_DAY = 86400000,
                ONE_MIN = 60000,
                ONE_WEEK = 604800000;

            var timeInterpolation = args.timeInterpolation || false,
                returnFileVolume = args.returnFileVolume || false,
                str = args.data,
                plotOn = args.plotOn || 'close',
                dataType = args.dataType || 'csv',
                parseAs = args.parseAs || args.range;


            if (dataType != 'json' && typeof str !== 'string') {
                throw new Error("Input to parser is not a string");
            }

            if (!parseAs) {
                throw new Error("Missing parseAs")
            }

            var result = {
                    json: [],
                    array: [],
                    plot: [],
                    volume: [],
                    dates: [],
                    datesText: [], //ankitz:added human date text
                    change: []
                },
                json = result.json,
                array = result.array,
                volume = result.volume,
                plot = result.plot,
                dates = result.dates,
                datesText = result.datesText,
                change = result.change,
                isJSON = (dataType === 'json') ? true : false,
                data = (isJSON) ? str : str.split('\n'),
                len = data.length;

            function interpolateTime(from, to, prevClose) {
                var count = 0;
                var t = from;
                while (from < to) {
                    each = {
                        date: from,
                        y: prevClose
                    };
                    json.push(each);
                    change.push({
                        date: from,
                        change: 0.00,
                        percent: 0.00
                    });
                    array.push([each.date, each.y]);
                    volume.push([each.date, 0]);
                    dates.push(each.date);
                    datesText.push((new Date(each.date)).toIndianDateTime()); //ankitz added

                    from += ONE_MIN;
                    count++;
                }
                //console.log("interpolating ", new Date(t).toLocaleString(), new Date(to).toLocaleString(), count, prevClose);
            };

            var getVolume = function(today, prev) {
                if (!returnFileVolume) {
                    getVolume = function(today, prev) {
                        //return current time volume
                        return today && (today - prev) || 0;
                    };
                } else {
                    getVolume = function(today) {
                        //return volume as given in file
                        return today || 0;
                    };
                }
            };
            getVolume();

            switch (parseAs) {
                case 'hist':

                    result.flags = {
                        bonus: [],
                        dividends: [],
                        splits: [],
                        rights: []
                    };
                    var flags = result.flags,
                        prevDate, prevClose;

                    $.each(data, function(lineNo, line) {
                        var each,
                            bonus, dividends, rights, splits;
                        if (!isJSON) {
                            // if CSV
                            var items = line.trim().split(','); // Adding trim strips out /r character at the end
                            var newDate = Date.parse(items[0]);

                            if (prevDate) {
                                var nextDate = prevDate + ONE_DAY;
                                while (newDate - nextDate > 0) {
                                    // if (holidays && !holidays.isHoliday(nextDate, args.exchange)) {
                                    //     // Not one of Sat /Sun or exchange holiday
                                    //     // add an entry for this day to the arrays
                                    //     each = {
                                    //         date: nextDate,
                                    //         open: prevClose,
                                    //         high: prevClose,
                                    //         low: prevClose,
                                    //         close: prevClose,
                                    //         volume: 0 //null
                                    //     };
                                    //     json.push(each);
                                    //     array.push([each.date, each.open, each.high, each.low, each.close]);
                                    //     volume.push([each.date, each.volume]);
                                    //     plot.push([each.date, each[plotOn]]);
                                    //     change.push({
                                    //         date: each.date,
                                    //         change: 0.00,
                                    //         percent: 0.00
                                    //     });
                                    //     dates.push(each.date);

                                    // }
                                    nextDate += ONE_DAY;
                                }
                            }

                            each = {
                                date: newDate,
                                open: Number(items[1]),
                                high: Number(items[2]),
                                low: Number(items[3]),
                                close: Number(items[4]),
                                volume: parseInt(items[5])
                            };
                            bonus = items[6];
                            dividends = items[7];
                            rights = items[8];
                            splits = items[9]; // && items[9].length>1; // !!! HACK;

                            json.push(each);
                        } else {
                            // if JSON
                            each = line;
                            each.date = Date.parse(line.date);

                            bonus = each.bonus;
                            dividends = each.dividends;
                            rights = each.rights;
                            splits = each.splits;
                        }

                        if (bonus) {
                            flags.bonus.push({
                                x: each.date,
                                title: 'B',
                                text: bonus,
                                name: 'bonus'
                            });
                        }
                        if (dividends) {
                            flags.dividends.push({
                                x: each.date,
                                title: 'D',
                                text: dividends,
                                name: 'dividends'
                            });
                        }
                        if (splits) {
                            flags.splits.push({
                                x: each.date,
                                title: 'S',
                                text: splits,
                                name: 'splits'
                            });
                        }
                        if (rights) {
                            flags.rights.push({
                                x: each.date,
                                title: 'R',
                                text: rights,
                                name: 'rights'
                            });
                        }

                        var currChange = 0.00,
                            percent = 0.00;

                        if (prevClose) {
                            currChange = each[plotOn] - prevClose;
                            percent = currChange * 100 / prevClose;
                        }

                        array.push([each.date, each.open, each.high, each.low, each.close]);
                        plot.push([each.date, each[plotOn]]);
                        volume.push([each.date, each.volume]);

                        change.push({
                            date: each.date,
                            change: currChange,
                            percent: percent
                        });
                        dates.push(each.date);
                        datesText.push((new Date(each.date)).toIndianDateTime()); //ankitz added
                        //Setting prevDate & prevClose
                        prevDate = newDate;
                        prevClose = each[plotOn]; // !!! CHANGE TO CLOSE
                    });

                    break;
                case 'intra':
                    var date,
                        prevTime, prev,
                        startTime, endTime,
                        prevVol = 0;
                    var currChange = null,
                        percent = null;


                    $.each(data, function(i, line, data) {
                        var each;
                        if (!isJSON) {
                            if (!line) {
                                return;
                            }
                            var items = line.trim().split(',');
                            if (i) {
                                if (!(items[0] && items[1])) {
                                    throw new Error("Missing entries in the CSV")
                                }

                                prev = (array.length) ? array[array.length - 1][1] : prevClose;

                                var currTime = Date.parse(date + " " + items[0]);
                                var nextTime = prevTime + ONE_MIN;
                                if (timeInterpolation) {
                                    if (i === 1 && currTime > startTime) {
                                        //interpolate timings from startTime to the first entry
                                        interpolateTime(startTime, currTime, prev);
                                    } else if (currTime - nextTime > 0) {
                                        //interpolate in between entries
                                        interpolateTime(nextTime, currTime, prev);
                                    }
                                }

                                var todayVol = items[2] && parseInt(items[2]) || 0,
                                    // BUG FIX: this makes sure that the volume doesn't become NaN when not present in the csv
                                    vol = getVolume(todayVol, prevVol);
                                each = {
                                    date: currTime,
                                    y: Number(items[1]),
                                    volume: vol
                                };
                                json.push(each);

                                currChange = each.y - prev,
                                percent = currChange * 100 / prev;

                                change.push({
                                    date: each.date,
                                    change: currChange,
                                    percent: percent
                                });

                                array.push([each.date, each.y]);
                                dates.push(each.date);

                                volume.push([each.date, vol]);

                                //interpolate for minutes from the last entry to the end time
                                //take into consideration of timezone offset
                                var d = new Date();
                                var currLocalTime = Date.parse(date + ' ' + d.getHours() + ':' + d.getMinutes());
                                var lastTimeToInterpolate = currLocalTime < endTime ? currLocalTime : endTime;
                                if (timeInterpolation && i === len - 1) {
                                    //console.log(new Date(lastTimeToInterpolate).toString());
                                    interpolateTime(each.date, lastTimeToInterpolate, each.y);
                                }

                                prevVol = todayVol;
                                prevTime = each.date;

                            } else if (i === 0) {
                                // first line has date & prev closing price
                                date = items[0];
                                prevClose = Number(items[1]);
                                startTime = Date.parse(date + ' ' + (items[2] || defaultTimings[0]));
                                endTime = Date.parse(date + ' ' + (items[3] || defaultTimings[1]));

                                result.prevClose = prevClose;
                            }
                        } else {

                        }
                    });
                    break;
                case 'week':
                    var prevVol, prevDate, prev,
                        prevTime, startTime, endTime;
                    var currChange = null,
                        percent = null;
                    //Using $.each instead of _.each as we want to break out of the loop
                    $.each(data, function(i, line, data) {
                        var newDate,
                            each;
                        if (!isJSON) {
                            var items = line.trim().split(',');

                            if (!(items[0] && items[1] && items[2])) {
                                //BUG FIX: Handle Empty week file
                                //if 1st entry is empty then we can conclude that no data exists
                                if (!i) {
                                    //breaking out of the loop
                                    return false;
                                }
                                throw new Error("Missing entries in the CSV");
                            }

                            newDate = Date.parse(items[0]);
                            if (_.isNaN(newDate)) {
                                throw new Error('Error in ' + (args.range || parseAs) + ' file Format');
                            }
                            var isNewDate = prevDate !== newDate;
                            if (isNewDate) {
                                prevDate = newDate;
                                startTime = Date.parse(items[0] + ' ' + (items[4] || defaultTimings[0]));
                                endTime = Date.parse(items[0] + ' ' + (items[5] || defaultTimings[1]));
                                prevTime = startTime - ONE_MIN; // subtracting 1 min for time adjustment with nextTime
                                prevVol = 0;

                            }

                            prev = (i && array[array.length - 1][1]);

                            var currTime = Date.parse(items[0] + " " + items[1]);
                            var nextTime = prevTime + ONE_MIN;
                            if (timeInterpolation && currTime - nextTime > 0 && i) { // remove i when prevClose available
                                //interpolate in between times
                                interpolateTime(nextTime, currTime, prev);
                            };
                            var todayVol = items[3] && parseInt(items[3]) || 0,
                                vol = getVolume(todayVol, prevVol);
                            each = {
                                date: currTime,
                                y: Number(items[2]),
                                volume: vol
                            };
                            json.push(each);

                            if (i) { // remove when prevClose available
                                currChange = each.y - prev;
                                percent = (prev) ? currChange * 100 / prev : null;
                            }

                            change.push({
                                date: each.date,
                                change: currChange,
                                percent: percent
                            });
                            array.push([each.date, each.y]);
                            dates.push(each.date);


                            volume.push([each.date, vol]);
                            prevVol = todayVol;
                            prevTime = currTime;
                        } else {

                        }
                    });
                    break;
                case 'basic':
                    //No intepolation here yet
                    $.each(data, function(lineNo, line) {
                        var items = line.split(',');
                        var date = Date.parse(items[0]);

                        var each = {
                            date: date,
                            value: Number(items[1])
                        }
                        json.push(each);
                        array.push([each.date, each.value]);
                    });
                    break;
                default:
                    break;
            }
            //console.log(result);
            return result;

        } catch (err) {
            throw err;
        }

    };

    return {
        fetch: fetch,
        getParsedData: getParsedData,
        parseHighStock: parseHighStock
    };
});

marketApp.factory('Formula', function($http) {

    var getInitParams = function() {
        return {
            EMA: {
                id: 'ema',
                name: 'ema',
                enabled: false,
                isCurrentlyDrawn: false,
                hasPeriodChanged: false,
                series: [],
                params: {
                    periods: {
                        window: [20]
                    },
                    defaultParams: {
                        periods: {
                            window: [20]
                        }
                    }
                }
            },
            SMA: {
                id: 'sma',
                name: 'sma',
                enabled: false,
                periods: {
                    period1: null
                },
                isCurrentlyDrawn: false,
                hasPeriodChanged: false,
                series: [],
                params: {
                    periods: {
                        window: [20]
                    },
                    defaultParams: {
                        periods: {
                            window: [20]
                        }
                    }
                }
            },
            Bollinger: {
                id: 'bollinger',
                name: 'bollinger',
                enabled: false,
                isCurrentlyDrawn: false,
                series: [],
                params: {
                    defaultParams: {
                        window: 20
                    }
                }
            },
            Envelopes: {
                id: 'envelopes',
                name: 'envelopes',
                enabled: false,
                isCurrentlyDrawn: false,
                series: [],
                params: {
                    defaultParams: {
                        window: 20,
                        percent: 5
                    }
                }
            },
            PSAR: {
                id: 'psar',
                name: 'psar',
                enabled: false,
                isCurrentlyDrawn: false,
                series: [],
                params: {
                    defaultParams: {
                        steps: {
                            afStep: 0.02,
                            afMax: 0.2
                        },
                        colors: ["#f1503b", "#137f0a"]
                    }
                }
            }

        }
    }

    var generateFormulaData = function(args) {

        // remove JOSN from starttime and endtime 

        var data = undefined,
            params = args.formulas;

        var startIndex = (args.chartData.startIndex && args.chartData.startIndex > 0) ? args.chartData.startIndex : undefined,
            endIndex = (args.chartData.endIndex && args.chartData.endIndex > 0) ? args.chartData.endIndex : undefined;


        if (startIndex && endIndex) {
            data = args.chartData.json.slice(startIndex, endIndex);
        } else {
            data = args.chartData.json;
        }


        // var startTimeStamp = args.chartData.firstDataPoint || undefined,
        //     endTimeStamp = args.chartData.lastDataPoint || undefined;

        // var startIndex = -1,
        //     endIndex = -1;

        // if (startTimeStamp && endTimeStamp) {

        //     var startDateObj = new Date(startTimeStamp + 86400000),
        //         endDateObj = new Date(endTimeStamp - 86400000);

        //     _.find(args.chartData.array, function(elem, idx) {
        //         var currDateObj = new Date(elem[0]);

        //         if (startDateObj.isSameDateAs(currDateObj)) {
        //             startIndex = idx;
        //         } else if (endDateObj.isSameDateAs(currDateObj)) {
        //             endIndex = idx;
        //             return;
        //         }

        //         // if (elem.date == startTimeStamp) {
        //         //     startIndex = idx;
        //         // } else if (elem.date == endTimeStamp) {
        //         //     endIndex = idx;
        //         // }
        //     });


        //     if (startIndex !== -1 && endIndex !== -1) {
        //         data = args.chartData.json.splice(startIndex, (endIndex - startIndex));
        //     }
        // }


        /**
         *   Exponential Moving Average Formula:
         *   Multiplier = 2 /(Time Period +1)
         *
         *   EMA = (Close - EMA[previous day] ) * multiplier + EMA[previous day]
         *   EMA[period-th] (i.e. first EMA)= SMA[period-th] /SMA at that i value
         *
         *   @method ema
         *   @param {Object[]|Array[]} data in JSON or Array format
         *   @param {Object} param - { <br/>
         *       window: {Number} [window=20] size of the window /period <br/>
         *   }
         *   @returns {Array[]} EMA of the given input. Format - (n-period+1 x 2 ) Array
         */
        var ema = function(data, param) {
            var period = (param.periods && param.periods.window) || param.defaultParams.periods.window || [20],
                multiplier = 2 / (period + 1),
                name = '',
                EMA = [],
                EMAS = [],
                len = data.length;
            for (var j = 0; j < period.length; j++) {
                EMA = [];
                name = 'EMA' + j;
                for (var i = 0; i < len; i++) {
                    var date = data[i].date || data[i][0],
                        ans;

                    var diff = i + 1 - period;
                    if (diff >= 0) {
                        if (diff > 0) {
                            var close = data[i].close || data[i][1],
                                prevDayEMA = EMA[diff - 1][1];

                            ans = (close - prevDayEMA) * multiplier + prevDayEMA;

                        } else {
                            //if its the 1st value, calculate its SMA
                            ans = SMAat(data, period[j], i) || null;
                        }
                        EMA[diff] = [date, ans];
                    }
                }
                EMAS.push(EMA);


            }
            // return EMAS[0];
            return {
                ema: EMAS[0]
            };
        };

        /**
         *   Simple Moving Average:
         *   Formula: SMA[i] = Average of Closing prices from i-period to i, where (i-period) >0
         *
         *   eg. 10 , 11 , 12 , 13 , 14 , 15 , 16 , period =5
         *   SMA@15 = (11 + 12 + 13 + 14 + 15) / 5
         *
         *   Optional Implementation: SMA[i] = SMA[i-1] + (Close[i] - Close[i-period])/period
         *   SMA@16 = SMA@15 + (16 - 11)/5
         *
         *   @method sma
         *   @param {Object[]|Array[]} data in JSON or Array format
         *   @param {Object} param - { <br/>
         *       window: {Number} [window=20] size of the window /period <br/>
         *   }
         *   @returns {Array[]} SMA of the given input. Format - (n-period+1 x 2 ) Array
         */
        var sma = function(data, param) {
            var SMA = [],
                len = data.length,
                period = (param.defaultParams.window) || (param.periods && param.periods.window[0]) || (param.defaultParams.periods.window[0]) || [20];
            // period = param.window || (param.defaultParams && param.defaultParams.window) || 20;


            for (var i = 0; i < len; i++) {
                var date = data[i].date || data[i][0],
                    ans;

                if (_.isUndefined(date)) {
                    throw new Error('Date is undefined for i: ' + i);
                }
                //var currData = data[i].close || data[i][1];
                var diff = i + 1 - period;
                if (diff >= 0) {
                    //if i >= period-th day; entire period number of values is now available
                    var sum = 0;
                    for (var j = diff; j <= i; j++) {
                        //sum += data[j].close || data[j][1];
                        if (j == 0) {
                            sum += data[j].close || data[j].y || data[j][1]; //-sk
                        } else {
                            sum += data[j].close || data[j].y || data[j][1]; //-sk
                        }
                    }
                    ans = sum / period;
                    SMA[diff] = [date, ans];
                }

            }
            return {
                sma: SMA
            };
            // return SMA;
        };

        /**
         *   This function calculates SMA at a given day - not the entire series. Used Internally by EMA
         *   Formula: SMA[i] = Average of Closing prices from i-period to i, where (i+1-period) >0
         *
         *   @method SMAat
         *   @param {Object[]|Array[]} data - Array of data values either in json or n x 2 array
         *   @param {Number} period - Window over which we need the SMA
         *   @param {Number} day - position where we need the SMA; day >= period -1
         *   @returns {Number|Undefined} SMA at that particular value if day >= period -1
         *
         */
        var SMAat = function(data, period, day) {
            try {

                var i = day + 1 - period,
                    count = period,
                    sum = 0, //t =[],
                    result;
                if (i >= 0) { //period nos of entries exists
                    while (count--) {
                        sum += (data[i].close || data[i][1]); //t.push(i)
                        i++;
                    }
                    //console.log(t);
                    result = sum / period;

                    if (isNaN(result)) {
                        throw new Error(TypeError, "Calulation results in NaN for SMA@" + day);
                    }
                }
                //else return undefined as sma doesn't exists

                return result;
            } catch (err) {
                throw err;
            }
        };

        /** 
         *   Standard Deviation Formula:
         *
         *   1. Calculate the average (mean) price for the number of periods or observations
         *   2. Determine each period's deviation (close less average price).
         *   3. Square each period's deviation
         *   4. Sum the squared deviations
         *   5. Divide this sum by the number of observations.
         *   6. The standard deviation is then equal to the square root of that number
         *
         *   Note: this method can be ported out separately as an explicit overlay. We just need to add an entry in the config file
         *
         *   @method standardDeviation
         *   @param {Object[]} data input data in JSON format
         *   @param {Object} param - { <br/>
         *       window: {Number} [window=20] size of the window /period <br/>
         *   }
         *   @returns {Array[]} standard deviation of the given input. Format - (n-period+1 x 2 ) Array
         */
        var standardDeviation = function(data, param) {


            var period = param.window || (param.defaultParams && param.defaultParams.window) || 20,
                //var close = _.pluck(data, 'close')

                len = data.length,
                stdDev = [];
            for (var i = 0; i < len; i++) {

                var sum = 0,
                    mean = 0,
                    deviation = 0,
                    dev2 = 0,
                    dev2Sum = 0,
                    variance = 0,
                    diff = i + 1 - period,
                    ans;

                if (diff >= 0) {
                    // 1. Calculate Arithmetic Mean
                    for (var j = diff; j <= i; j++) {
                        var close = data[j].close || data[j].y || data[j][1]; //--sk
                        //sum += close[j];
                        sum += close; //--sk
                    }
                    mean = sum / period;

                    // 2, 3, 4. Deviation
                    for (var k = diff; k <= i; k++) {
                        var close = data[k].close || data[k].y || data[k][1]; //--sk
                        deviation = close - mean; //sks
                        dev2 = Math.pow(deviation, 2);
                        dev2Sum += dev2;
                    }

                    variance = dev2Sum / period;
                    ans = Math.sqrt(variance)

                    stdDev[diff] = [data[i].date, ans];
                }
            }
            //console.log("STDEv", len, stdDev.length, stdDev);
            return stdDev;
        };

        /** 
         *   Bollinger Bands Formula:
         *
         *   Middle Band = 20-day simple moving average (SMA)
         *   Upper Band = 20-day SMA + (20-day standard deviation of price x 2)
         *   Lower Band = 20-day SMA - (20-day standard deviation of price x 2)
         *
         *   @method bollinger
         *   @param {Object[]} data input data in JSON format
         *   @param {Object} param - { <br/>
         *       window: {Number} [window=20] size of the window /period <br/>
         *   }
         *   @returns {Object} {<br/>
         *       bands: {Array[]} bollinger band of the given input. Format - (n-period+1 x 3 ) Array, <br/>
         *       middle: {Array[]} sma20 of input. Format - (n-period+1 x 2) Array <br/>
         *   }
         */
        var bollinger = function(data, param) {
            var period = param.window || (param.defaultParams && param.defaultParams.window) || 20,
                stdDev = standardDeviation(data, param),
                sma20 = (sma(data, param)).sma,
                band = [],
                ups = [],
                lws = [],
                len = data.length;

            for (var i = 0; i < len; i++) {
                var date = data[i].date || data[i][0],
                    upper, lower;
                var diff = i + 1 - period;
                if (diff >= 0) {
                    upper = sma20[diff][1] + (stdDev[diff][1] * 2);
                    lower = sma20[diff][1] - (stdDev[diff][1] * 2);

                    //band[diff] = [date, upper, lower];
                    lws[diff] = [date, lower];
                    ups[diff] = [date, upper];
                }
            }
            return {
                'bollinger_middle': sma20,
                'bollinger_upper': ups,
                'bollinger_lower': lws

            };
        };

        /** 
         *   Parabolic SAR Formula:
         *   Prior SAR: The SAR value for the previous period.
         *
         *   Extreme Point (EP): The highest high/ lowest low of the current uptrend.
         *
         *   Acceleration Factor (AF): Starting at .021 AF increases by .01 each time the extreme point
         *   makes a new high/low. AF can reach a maximum of .20, no matter how long the uptrend/downtrend extends.
         *
         *   Current SAR = Prior SAR + Prior AF(Prior EP - Prior SAR)
         *
         *   Note however that SAR can never be above/below the prior two periods' lows/highs. Should SAR be above/below one of those lows/highs,
         *   use the lowest/highest of the two for SAR
         *
         *   @method psar
         *   @param {Object[]} data input data in JSON format
         *   @param {Object} param - { <br/>
         *       afStep: {Number} [afStep=0.02] each step size of acceleration factor, <br/>
         *       afMax: {Number} [afMax=0.2] max acceleration factor ,<br/>
         *       colour: {Array} ['#f1503b', '#137f0a']
         *   }
         *   @returns {Array[]} pSAR of the given input. Format: {x: X_VAL, y: Y_VAL, color: PT_COLOR}
         *   //DEPRECATED RETURN //@returns {Object} {<br/>
         *       rising: {Array[]} rising psar of the given input (in green). Format - (n-period+1 x 2 ) Array, <br/>
         *       falling: {Array[]} falling psar of the given input (in red). Format - (n-period+1 x 2 ) Array, <br/>
         *   }
         *
         */
        var psar = function(data, param) {
            try {
                var param = param.defaultParams || {},
                    colourArray = param.colors || ['#00ff00', '#ff0000'];



                //var afStep    = 0.2,
                //  afMax   = 1,
                var afStep = param.steps.afStep || 0.02,
                    afMax = param.steps.afMax || 0.2,

                    //psarRise =[],
                    //psarFall = [],
                    //psar = psarRise,
                    psarBoth = [],
                    psar = psarBoth,

                    colour,
                    risingColour = colourArray[0],
                    fallingColour = colourArray[1],
                    psar = [],
                    newLow,
                    newHigh,
                    prevLow = data[0].low,
                    prevHigh = data[0].high,
                    length = data.length,
                    isLongPosition = 1,
                    newTrend = 1,
                    ep,
                    prevSAR,
                    SAR,
                    prevAF,
                    max = Math.max,
                    min = Math.min;

                function risingTrend() {
                    if (!newTrend) {
                        SAR = prevSAR + prevAF * (ep - prevSAR);

                        if (newHigh > ep) {
                            ep = newHigh;
                            prevAF = min(prevAF + afStep, afMax);
                        }

                        if (prevSAR > min(newLow, prevLow)) {
                            // ignore this calculation
                            newTrend = 1;
                            isLongPosition = 0;

                            //  psar = psarFall;
                            psar = psarBoth;

                            colour = risingColour;
                            SAR = null;

                            //execute falling trend
                            fallingTrend();
                        }

                    } else {
                        prevSAR = newLow;
                        prevAF = afStep;
                        ep = newHigh;

                        //reset newTrend
                        newTrend = 0;
                    }
                };

                function fallingTrend() {
                    if (!newTrend) {
                        SAR = prevSAR + prevAF * (ep - prevSAR);

                        if (newLow < ep) {
                            ep = newLow;
                            prevAF = min(prevAF + afStep, afMax);
                        }

                        if (prevSAR < max(prevHigh, newHigh)) {
                            // ignore this calculation
                            // call risingTrend()
                            newTrend = 1;
                            isLongPosition = 1;

                            //  psar = psarRise;
                            psar = psarBoth;

                            colour = fallingColour,
                            SAR = null;

                            risingTrend();
                        }

                    } else {
                        prevSAR = newHigh;
                        prevAF = afStep;
                        ep = newLow;

                        //reset newTrend
                        newTrend = 0;
                    }
                };

                for (var i = 0; i < length; i++) {
                    newHigh = data[i].high;
                    newLow = data[i].low;

                    if (isLongPosition) {
                        // Rising Trend
                        //  colour = '#00ff00';
                        risingTrend();
                    } else {
                        // Falling Trend
                        //  colour = '#ff0000';
                        fallingTrend();
                    }
                    if (length > 1000 && i % 5 == 0) {
                        //lesser points of psar for better analysis for 5YRS & Max - Shilpa Karkera

                        //  psar.push([data[i].date, prevSAR]);
                        psar.push({
                            x: data[i].date,
                            y: prevSAR,
                            color: colour
                        });
                    } else if (length < 1000) {
                        psar.push({
                            x: data[i].date,
                            y: prevSAR,
                            color: colour
                        })
                    };
                    prevSAR = (SAR) ? SAR : prevSAR;
                    prevLow = newLow;
                    prevHigh = newHigh;
                }

                return {
                    psar: psar
                }
                // return psar;//ankitz modified RETURN TYPE fro array to object
                /*return {
                    'rising'    :   psarRise,
                    'falling'   :   psarFall
                };*/
            } catch (err) {
                throw err;
            }
        };

        /**
         *   Window = 20, percent = 0.05
         *   Upper Envelope: window_day SMA + (window_day SMA x param)
         *   Lower Envelope: window_day SMA - (window_day SMA x param)
         *
         *   @method envelopes
         *   @param {Object[]|Array[]} data in JSON or Array format
         *   @param {Object} param - { <br/>
         *       window: {Number} [window=20] size of the window /period, <br/>
         *       percent: {Number} [percent=5] how much percent eg. 5, 10, 20 (not in the form 0.05, 0.1, 0.2)<br/>
         *   }
         *   @returns {Array[]} Envelope of the given input. Format - (n-period+1 x 3 ) Array
         */
        var envelopes = function(data, param) {
            var percent = param.percent * 0.01 || param.defaultParams.percent * 0.01 || 0.05,
                period = param.window || param.defaultParams.window || 20;

            var SMA = (sma(data, param)).sma,
                len = SMA.length,
                upperMultiplier = 1 + percent,
                lowerMultiplier = 1 - percent,
                envelope_up = [];
            envelope_low = [];

            for (var i = 0; i < len; i++) {

                //copying the date
                var date = SMA[i][0],
                    up, low;

                //multiplying with respective multipliers
                if (SMA[i][1]) {
                    up = upperMultiplier * SMA[i][1];
                    low = lowerMultiplier * SMA[i][1];
                } else {
                    up = null;
                    low = null;
                }
                envelope_up[i] = [date, up, low]; //ankitz:added low temporarily
                envelope_low[i] = [date, low];
            }
            //console.log("envelope", envelope.length);
            return {
                'envelopes': envelope_up
            }
            // return {
            //     'upper_env': envelope_up,

            //     'lower_env': envelope_low
            // }

        };

        (function() {
            var bollinger_data = bollinger(data, params.Bollinger.params);
            var psar_data = psar(data, params.PSAR.params);
            var envelope_data = envelopes(data, params.Envelopes.params);
            var ema_data = ema(data, params.EMA.params);
            var sma_data = sma(data, params.SMA.params);


            formulae = {
                bollinger: bollinger_data,
                ema: ema_data,
                sma: sma_data,
                psar: psar_data,
                envelopes: envelope_data
            };

            args.chartData.formulae = formulae;
        })();
    };

    /*DESCRIPTION:This function will be called for a Particular Formula and
     return its configured Highchart Object which is to be added to the MainCharts Series.*/
    /*PARAMETERS:-
      attr{object}:This will contain the Formulas id/name/data */
    var createObject = function(attr) {

        var result,
            name = attr.name,
            id = attr.id,
            param = attr.param,
            fillOpacity = attr.opacity || 0.3,
            data = attr.data,
            colour = attr.colour || ['#f28f43', '#ff0000', '#ff0000'], // (attr.colour === 'inherit') ? this.inheritColour : attr.colour,
            hexColour;

        switch (id) {
            case 'bollinger':
                colour = ['#ffc900', '#33995f', '#ff0000'];
                hexColour = colour[0];
                result = [{
                    id: id + '_upper',
                    name: name + '_upper',
                    data: data.bollinger_upper,
                    color: colour[0],
                    fillOpacity: fillOpacity,
                    //type: 'arearange',
                    //lineWidth: 0
                }, {
                    id: id + '_middle',
                    name: name + '_middle',
                    data: data.bollinger_middle,
                    color: colour[1],
                    fillOpacity: fillOpacity,
                    //linkedTo: ':previous'
                }, {
                    id: id + '_lower',
                    name: name + '_lower',
                    data: data.bollinger_lower,
                    color: colour[0],
                    fillOpacity: fillOpacity,
                    //linkedTo: ':previous'
                }];
                break;
            case 'ema':
                result = [{
                    id: id,
                    name: name,
                    data: data.ema,
                    color: '#886aea'
                }]
                break;
            case 'envelopes':
                result = [{
                        // id: id + '-upper',
                        id: id,
                        // name: name + '-upper',
                        name: name,
                        // data: data.upper_env,
                        data: data.envelopes,
                        color: '#33cd5f',
                        fillOpacity: fillOpacity,
                        type: 'arearange', //ankitz:enabled
                        //lineWidth: 0
                    }
                    // , {
                    //     id: id + '-lower',
                    //     name: name + '-lower',
                    //     data: data.lower_env,
                    //     color: '#ff0000',
                    //     fillOpacity: fillOpacity,

                    //     //type: 'arearange',
                    //     //lineWidth: 0
                    // }
                ];
                break;
            case 'psar':

                //colour = (colour instanceof Array)? colour : ['#ff0000', '#00ff00'];
                //hexColour = colour[0];

                /* OPTION 3: //BUG FIX - HACK for pSAR values
                var pSarData = []
                _.each(data.rising, function(each){
                    pSarData.push({x: each[0], y: each[1], color: colour[0]})
                });
                _.each(data.falling, function(each){
                    pSarData.push({x: each[0], y: each[1], color: colour[1]})
                });
                pSarData = _.sortBy(pSarData, function(each){
                    return each.x;
                })*/
                //console.log(data);
                result = [{
                    id: id,
                    name: name,
                    data: data.psar, //pSarData,
                    fillOpacity: fillOpacity,
                    dashStyle: 'ShortDot',
                    type: 'scatter'
                }];
                /*result = [{
                    id : id+'-rising',
                    name: name,
                    data: data.rising,
                    color   : colour[0],
                    fillOpacity: fillOpacity,
                    dashStyle: 'ShortDot',
                    type: 'scatter'
                },{
                    id : id+'-falling',
                    name: name,
                    data: data.falling,
                    color   : colour[1],
                    fillOpacity: fillOpacity,
                    dashStyle: 'ShortDot',
                    type: 'scatter',
                    linkedTo: ':previous'
                }];*/
                break;
            case 'sma':
                result = [{
                    id: id,
                    name: name,
                    data: data.sma,
                    color: "#ef473a"
                }]
                break;
            default:
                result = [{
                    id: id,
                    name: name,
                    data: data,
                    color: "#ff0000"
                }]
                break;
        }
        return result;
    }

    var redrawFormulas = function(args) {

        var indexes = fetchIndexes(args),
            startIndex = indexes && indexes.startIndex || -1,
            endIndex = indexes && indexes.endIndex || -1;

        if (startIndex !== -1 && endIndex !== -1) {
            // THIS WILL RUN ONLY IF WE FIND NEW INDEX
            // 1.NOW CALCULATE FOR THE NEW RANGE(either from zoom/pinching/rangebutton triggers)
            // 2.After all calculations are done we redraw all Formulas that are currently Drawn.

            args.chartData.startIndex = startIndex;
            args.chartData.endIndex = endIndex;
            generateFormulaData(args);
            redrawingFormulas(args);
        }
    };

    var fetchIndexes = function(args) {
        var DAY = 86400000;
        var startTimeStamp = args.chartData.firstDataPoint || undefined,
            endTimeStamp = args.chartData.lastDataPoint || undefined,
            chartArray = args.chartData.array;

        var startIndex = -1,
            endIndex = -1,
            m = 0,
            n = 0;

        if (startTimeStamp && endTimeStamp) {



            //OPTIMIZE THIS BY USING SOME OTHER FIND-ALGORITM or write one
            //ALGORITM 1:-
            startTimer = new Date();


            var getInceptionDates = function(m, n) {

                var startDateObj = new Date(startTimeStamp + DAY * m),
                    endDateObj = new Date(endTimeStamp - DAY * n),
                    currDateObj = undefined;

                for (var i = 0; i < chartArray.length; i++) {
                    currDateObj = new Date(chartArray[i][0]);
                    if (startIndex == -1 && startDateObj.isSameDateAs(currDateObj)) {
                        startIndex = i;
                        if (endIndex != -1) {
                            return;
                        }
                    } else if (endIndex == -1 && endDateObj.isSameDateAs(currDateObj)) {
                        endIndex = i;
                        break;
                    }
                }
                if (startIndex == -1) {
                    getInceptionDates(++m, n);
                } else if (endIndex == -1) {
                    getInceptionDates(m, ++n);
                }
                return;


            };
            getInceptionDates(m, n);


            // for (var i = 0; i < chartArray.length; i++) {
            //     currDateObj = new Date(chartArray[i][0]);
            //     if (startIndex == -1 && startDateObj.isSameDateAs(currDateObj)) {
            //         startIndex = i;
            //     } else if (endDateObj.isSameDateAs(currDateObj)) {
            //         endIndex = i;
            //         break;
            //     }
            // }



            console.log('ALGO1:', new Date() - startTimer);




            //ALGORITM 2:-
            // startTimer = new Date();
            // _.find(args.chartData.array, function(elem, idx) {
            //     currDateObj = new Date(elem[0]);

            //     if (startDateObj.isSameDateAs(currDateObj)) {
            //         startIndex = idx;
            //     } else if (endDateObj.isSameDateAs(currDateObj)) {
            //         endIndex = idx;
            //     }
            // });
            // console.log('ALGO2:', new Date() - startTimer);

        }
        return {
            startIndex: startIndex,
            endIndex: endIndex
        }
    };

    var redrawingFormulas = function(args) {
        var shouldRedraw = false;
        var current_formula = undefined;
        for (var formula in args.formulas) {
            current_formula = args.formulas[formula];
            if (current_formula.isCurrentlyDrawn) {

                for (var item in current_formula.series) {
                    var seriesName = current_formula.series[item];
                    var data = args.chartData.formulae[formula.toLowerCase()][seriesName];
                    var idx = (_.pluck(args.chart.series, 'name')).indexOf(seriesName);
                    args.chart.series[idx].setData(data);
                    shouldRedraw = true;
                }
            }
        }

        // This will decide if the charts need to be redrawn
        //  and if yes than it will call chart.redraw() only once for performance rather than after each series addition
        if (shouldRedraw) {
            console.log('redraw once for formula');
            //args.chart.redraw(); //CALLING ONLY ONCE AFTER EACH POPUP OPEN/CLOSE
        }

    };

    var manageFormulas = function(args) {
        var shouldRedraw = false;
        for (var formula in args.formulas) {
            var current_formula = args.formulas[formula];
            if (current_formula.enabled) {
                if (!current_formula.isCurrentlyDrawn || (typeof current_formula.hasPeriodChanged != "undefined" && current_formula.hasPeriodChanged == true)) {

                    args.chart.showLoading(); //SHOWING LOADING


                    if (current_formula.hasPeriodChanged == true) {
                        redrawingFormulas(args); //This will call redraw when the input Period have changed
                        current_formula.hasPeriodChanged = false; //Disable once the Series Redraws

                    } else {
                        current_formula.plotObj = createObject({
                            id: current_formula.id,
                            name: current_formula.name || 'name',
                            data: args.chartData.formulae[current_formula.id]
                        });
                        for (var item in current_formula.plotObj) {
                            current_formula.series.push(args.chart.addSeries(current_formula.plotObj[item], false, true).name);
                        };
                    }


                    shouldRedraw = true;
                    current_formula.isCurrentlyDrawn = true; //enabling this after plotting so we can remove it if it was enabled before 
                }

            } else {
                // remove the formula series if already plottted
                if (current_formula.isCurrentlyDrawn) {
                    for (var item in current_formula.series) {
                        var seriesName = current_formula.series[item];
                        var idx = (_.pluck(args.chart.series, 'name')).indexOf(seriesName);


                        // var id=(current_formula.series[item].id+2);//adding 2 since the main series and volume occupies the first two spots in $scope.ADVANCE_CHART.chart.series 
                        args.chart.series[idx].remove(false);
                        current_formula.isCurrentlyDrawn = false;
                        // current_formula.series.pop($scope.ADVANCE_CHART.chart.remove(current_formula.series[item], true, true));
                    };
                    current_formula.series = [];
                    shouldRedraw = true;
                }
            }
        }
        // This will decide if the charts need to be redrawn
        //  and if yes than it will call chart.redraw() only once for performance rather than after each series addition
        if (shouldRedraw) {
            console.log('redraw once for formula');
            args.chart.redraw(); //CALLING ONLY ONCE AFTER EACH POPUP OPEN/CLOSE
        }
    };


    /*DESCRIPTION:This function will loop through all the formula's toggle/checkbox in the Formula Popup and reset them to their Previous-State(ON/OFF).*/
    /*PARAMETERS:-
            formulas{object}:This will contain Each Formulas Current State(Enabled/Drawn etc) */
    var resetPopup = function(formulas) {
        for (var formula in formulas) {
            formulas[formula].enabled = formulas[formula].isCurrentlyDrawn;
        }
    }

    return {
        getInitParams: getInitParams,
        generateFormulaData: generateFormulaData,
        createObject: createObject,
        redrawFormulas: redrawFormulas,
        manageFormulas: manageFormulas,
        resetPopup: resetPopup
    }

});



var stockChartData = "[[1225497600000,108.5,111.79,79.14,92.4],[1228089600000,90.95,103.6,84.55,85.56],[1230768000000,86.21,97.17,76.09,90.32],[1233446400000,89.41,103,85.25,89.44],[1235865600000,87.3,109.98,82.33,104.57],[1238544000000,104.74,128.23,103.88,125.86],[1241136000000,125.9,136.99,118.92,135.7],[1243814400000,135.68,148.15,132.88,142.36],[1246406400000,143.01,165,134.42,163.16],[1249084800000,164.8,172.75,159.39,168.31],[1251763200000,168.79,188.9,163,185.83],[1254355200000,184.57,208.71,180.21,191.8],[1257033600000,189.59,208.93,185.57,199.42],[1259625600000,200.67,213.95,187.93,210.22],[1262304000000,212,215.76,190.25,191.34],[1264982400000,192.4,205.17,190.2,204.68],[1267401600000,206.06,238.74,204.64,235.4],[1270080000000,235.24,272.8,232.75,261.46],[1272672000000,262.37,267.88,225.21,256.93],[1275350400000,256.81,279.01,242.2,256.89],[1277942400000,252,266.45,239.6,256.96],[1280620800000,258.61,264.28,235.56,244.07],[1283299200000,245.51,295.04,243.11,284.3],[1285891200000,285.37,319.91,277.77,300.89],[1288569600000,303.59,321.86,297.76,310.61],[1291161600000,312.93,327.55,312.93,323.5],[1293840000000,324,356.63,322.56,339.6],[1296518400000,339.73,364.9,335.17,354],[1298937600000,355.02,362,326.26,348.8],[1301616000000,349.4,360.9,320.16,349.7],[1304208000000,352.2,353.23,329.42,349],[1306886400000,348.9,352.13,310.5,335.63],[1309478400000,335.3,405,334.2,391.75],[1312156800000,397.46,399.5,345.51,385.07],[1314835200000,385.03,422.86,366.48,380.4],[1317427200000,379.96,422.29,354.24,422],[1318622340000,null,null,null,null]]";
var stockChartDataArr = JSON.parse(stockChartData);



// Define a custom service that returns a promise from a call

marketApp.service('MyService', ['DreamFactory',
    function(DreamFactory) {

        return {

            // Define custom getRecords service
            getRecords: function(tableNameStr) {


                // Create request obj
                var request = {
                    table_name: 'todo'
                };

                // Call DreamFactory database service with request obj
                // As long as we don't specify callback/error functions
                // angular-dreamfactory will return promises which we are passing
                // back as the result of the call to MyService.getRecords() in the controller

                return DreamFactory.api.db.getRecords(request);

            },

            setRecords: function() {
                // Create request obj
                var request = {
                    table_name: 'todo'
                };

                // Call DreamFactory database service with request obj
                // As long as we don't specify callback/error functions
                // angular-dreamfactory will return promises which we are passing
                // back as the result of the call to MyService.getRecords() in the controller

                return DreamFactory.api.db.getRecords(request);

            }
        }
    }
]);