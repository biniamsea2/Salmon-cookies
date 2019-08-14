'use strict';

var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = {
    storeName: 'First and Pike',
    minCusthour: 23,
    maxCusthour: 65,
    avgCookSale: 6.3,
    avgCusthour: [],
    avgCookhour: [],
    totalCookies: 0,

    //created avg customer generator for each hour from 6am to 8pm.
    custHour: function () {
        for (var i = 0; i < time.length; i++) {
            var custOnehour = Math.ceil(Math.random() * (this.maxCusthour - this.minCusthour) / 2)
            this.avgCusthour.push(custOnehour);
        }
    },

    //number of cookies a customer purchases per hour from 6am to 8pm.
    cookiesPerCust: function () {
        for (var j = 0; j < time.length; j++) {
            console.log(this.avgCusthour[j])
            this.totalCookies += this.avgCusthour[j];
        }
    },

    //Creates the list and appends it to the DOM
    listStuff: function () {
        var all = document.createElement('div');
        all.innerHTML = '<h3>' + this.storeName + '</h3>';
        document.body.appendChild(all);


        var list = document.createElement('ul');
        var listArr = [];

        for (var i = 0; i < time.length; i++) {
            if (i < 16) {
                listArr.push('<li>' + time[i] + ': ' + this.avgCusthour[i] + ' cookies</li>');
            }
        }
        listArr.push('<li> Total: ' + this.totalCookies + ' cookies</li>');

        var final = listArr.join('');
        list.innerHTML = final;
        document.body.appendChild(list);
    }
};

pike.custHour();
pike.cookiesPerCust();
pike.listStuff();


//SeaTac
var seaTac = {
    storeName: 'SeaTac',
    minCusthour: 3,
    maxCusthour: 24,
    avgCookSale: 1.2,
    avgCusthour: [],
    avgCookhour: [],
    totalCookies: 0,

    //created avg customer generator for each hour from 6am to 8pm.
    custHour: function () {
        for (var i = 0; i < time.length; i++) {
            var custOnehour = Math.ceil(Math.random() * (this.maxCusthour - this.minCusthour) / 2)
            this.avgCusthour.push(custOnehour);
        }
    },

    //number of cookies a customer purchases per hour from 6am to 8pm.
    cookiesPerCust: function () {
        for (var j = 0; j < time.length; j++) {
            console.log(this.avgCusthour[j])
            this.totalCookies += this.avgCusthour[j];
        }
    },

    //Creates the list and appends it to the DOM
    listStuff: function () {
        var all = document.createElement('div');
        all.innerHTML = '<h3>' + this.storeName + '</h3>';
        document.body.appendChild(all);


        var list = document.createElement('ul');
        var listArr = [];

        for (var i = 0; i < time.length; i++) {
            if (i < 16) {
                listArr.push('<li>' + time[i] + ': ' + this.avgCusthour[i] + ' cookies</li>');
            }
        }
        listArr.push('<li> Total: ' + this.totalCookies + ' cookies</li>');

        var final = listArr.join('');
        list.innerHTML = final;
        document.body.appendChild(list);
    }
};

seaTac.custHour();
seaTac.cookiesPerCust();
seaTac.listStuff();


//Seattle Center
var seattle = {
    storeName: 'Seattle Center',
    minCusthour: 11,
    maxCusthour: 38,
    avgCookSale: 3.7,
    avgCusthour: [],
    avgCookhour: [],
    totalCookies: 0,

    //created avg customer generator for each hour from 6am to 8pm.
    custHour: function () {
        for (var i = 0; i < time.length; i++) {
            var custOnehour = Math.ceil(Math.random() * (this.maxCusthour - this.minCusthour) / 2)
            this.avgCusthour.push(custOnehour);
        }
    },

    //number of cookies a customer purchases per hour from 6am to 8pm.
    cookiesPerCust: function () {
        for (var j = 0; j < time.length; j++) {
            console.log(this.avgCusthour[j])
            this.totalCookies += this.avgCusthour[j];
        }
    },

    //Creates the list and appends it to the DOM
    listStuff: function () {
        var all = document.createElement('div');
        all.innerHTML = '<h3>' + this.storeName + '</h3>';
        document.body.appendChild(all);


        var list = document.createElement('ul');
        var listArr = [];

        for (var i = 0; i < time.length; i++) {
            if (i < 16) {
                listArr.push('<li>' + time[i] + ': ' + this.avgCusthour[i] + ' cookies</li>');
            }
        }
        listArr.push('<li> Total: ' + this.totalCookies + ' cookies</li>');

        var final = listArr.join('');
        list.innerHTML = final;
        document.body.appendChild(list);
    }
};

seattle.custHour();
seattle.cookiesPerCust();
seattle.listStuff();


//Capitol Hill
var cap = {
    storeName: 'Capitol Hill',
    minCusthour: 20,
    maxCusthour: 38,
    avgCookSale: 2.3,
    avgCusthour: [],
    avgCookhour: [],
    totalCookies: 0,

    //created avg customer generator for each hour from 6am to 8pm.
    custHour: function () {
        for (var i = 0; i < time.length; i++) {
            var custOnehour = Math.ceil(Math.random() * (this.maxCusthour - this.minCusthour) / 2)
            this.avgCusthour.push(custOnehour);
        }
    },

    //number of cookies a customer purchases per hour from 6am to 8pm.
    cookiesPerCust: function () {
        for (var j = 0; j < time.length; j++) {
            console.log(this.avgCusthour[j])
            this.totalCookies += this.avgCusthour[j];
        }
    },

    //Creates the list and appends it to the DOM
    listStuff: function () {
        var all = document.createElement('div');
        all.innerHTML = '<h3>' + this.storeName + '</h3>';
        document.body.appendChild(all);


        var list = document.createElement('ul');
        var listArr = [];

        for (var i = 0; i < time.length; i++) {
            if (i < 16) {
                listArr.push('<li>' + time[i] + ': ' + this.avgCusthour[i] + ' cookies</li>');
            }
        }
        listArr.push('<li> Total: ' + this.totalCookies + ' cookies</li>');

        var final = listArr.join('');
        list.innerHTML = final;
        document.body.appendChild(list);
    }
};

cap.custHour();
cap.cookiesPerCust();
cap.listStuff();


//Alki
var alki = {
    storeName: 'Alki Beach',
    minCusthour: 2,
    maxCusthour: 16,
    avgCookSale: 4.6,
    avgCusthour: [],
    avgCookhour: [],
    totalCookies: 0,

    //created avg customer generator for each hour from 6am to 8pm.
    custHour: function () {
        for (var i = 0; i < time.length; i++) {
            var custOnehour = Math.ceil(Math.random() * (this.maxCusthour - this.minCusthour) / 2)
            this.avgCusthour.push(custOnehour);
        }
    },

    //number of cookies a customer purchases per hour from 6am to 8pm.
    cookiesPerCust: function () {
        for (var j = 0; j < time.length; j++) {
            console.log(this.avgCusthour[j])
            this.totalCookies += this.avgCusthour[j];
        }
    },

    //Creates the list and appends it to the DOM
    listStuff: function () {
        var all = document.createElement('div');
        all.innerHTML = '<h3>' + this.storeName + '</h3>';
        document.body.appendChild(all);


        var list = document.createElement('ul');
        var listArr = [];

        for (var i = 0; i < time.length; i++) {
            if (i < 16) {
                listArr.push('<li>' + time[i] + ': ' + this.avgCusthour[i] + ' cookies</li>');
            }
        }
        listArr.push('<li> Total: ' + this.totalCookies + ' cookies</li>');

        var final = listArr.join('');
        list.innerHTML = final;
        document.body.appendChild(list);
    }
};

alki.custHour();
alki.cookiesPerCust();
alki.listStuff();