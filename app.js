'use strict';

var time = ['6am', ' 7am', ' 8am', ' 9am', ' 10am', ' 11am', ' 12pm', ' 1pm', ' 2pm', ' 3pm', ' 4pm', ' 5pm', ' 6pm', ' 7pm', ' 8pm'];
var elTable = document.getElementById('tableChart')
var listOfPlaces = []; 


function Store(storeName, minCusthour, maxCusthour, avgCookSale) {//only need to add the things that are changing between each location.But I added them all just becuase. If you want to remove you must remove the ones under this comment as well.
    this.storeName = storeName;
    this.minCusthour = minCusthour;
    this.maxCusthour = maxCusthour;
    this.avgCookSale = avgCookSale;
    this.time = time;
    this.avgCusthour = [];
    this.totalCookies = 0;
    listOfPlaces.push(this); //push all new stores into the listOfPlaces array


    // creates avg customer for each hour from 6am to 8pm.
    this.custHour = function () {
        for (var i = 0; i < time.length; i++) {
            var custOnehour = Math.floor(Math.random() * (this.maxCusthour - this.minCusthour + 1) + this.minCusthour);
            this.avgCusthour.push(custOnehour);
        }
    };
    this.cookiesPerCust = function () {
        for (var j = 0; j < time.length; j++) {
            this.totalCookies += this.avgCusthour[j];
        }
    };
    //creates 
    this.showData = function () {
        var storeRow = document.createElement('tr');
        var elCell = document.createElement('td');
        elCell.textContent = this.storeName;
        storeRow.appendChild(elCell);

        for (var i = 0; i < time.length; i++) {
            var hourSale = document.createElement('td');
            hourSale.textContent = this.avgCusthour[i];
            storeRow.appendChild(hourSale);
        }

        elTable.appendChild(storeRow);
    };
};

var tableHeader = function () {
    //creates the header for the table
    var elRow = document.createElement('tr');
    var elTh = document.createElement('th');
    elTh.textContent = 'Store Names';
    elRow.appendChild(elTh);

    for (var i = 0; i < time.length; i++) {
        var temp = document.createElement('th');
        temp.textContent = time[i];
        elRow.appendChild(temp);
    }

    var dailyTotal = document.createElement('th');
    dailyTotal.textContent = 'Daily Total';
    elRow.appendChild(dailyTotal);
    elTable.appendChild(elRow);
};

var tableFooter = function () {
    var elRow = document.createElement('tr');
    var elTh = document.createElement('th');
    elTh.textContent = 'Total Cookies: ';
    elRow.appendChild(elTh);

    for (i = 0; i < time.length; i++) { //calculate total for each store
        var total = document.createElement('th');
        total.textContent = 'total';
        elRow.appendChild(total);

    }
    elTable.appendChild(elRow);

}

//Created listOfPlaces array and set it empty.

//Don't need 'var' because you can find each Store in the array ex:([1,2,3]), but added it anyways. Only added the things that are changin in the parameters for each place.
var pike = new Store('First and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac', 3, 24, 1.2);
var seattle = new Store('Seattle Center', 11, 38, 3.7);
var cap = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki Beach', 2, 16, 4.6);

//made for loop that will console.log each Store in the listOfPlaces array.
tableHeader();
for (var i = 0; i < listOfPlaces.length; i++) {
    listOfPlaces[i].custHour();
    listOfPlaces[i].cookiesPerCust();
    listOfPlaces[i].showData();
};
tableFooter();