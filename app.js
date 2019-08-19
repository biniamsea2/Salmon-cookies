'use strict';

var time = ['6am', ' 7am', ' 8am', ' 9am', ' 10am', ' 11am', ' 12pm', ' 1pm', ' 2pm', ' 3pm', ' 4pm', ' 5pm', ' 6pm', ' 7pm', ' 8pm'];
var elTable = document.getElementById('tableChart');
var listOfPlaces = [];


function Store(storeName, minCusthour, maxCusthour, avgCookSale) {
    this.storeName = storeName;
    this.minCusthour = minCusthour;
    this.maxCusthour = maxCusthour;
    this.avgCookSale = avgCookSale;
    this.time = time;
    this.avgCusthour = [];
    this.totalCookies = 0;
    listOfPlaces.push(this);

    this.custHour = function () {
        for (var i = 0; i < time.length; i++) {
            var custOnehour = Math.floor(Math.random() * (this.maxCusthour - this.minCusthour + 1) + this.minCusthour);
            this.avgCusthour.push(custOnehour);
        }
    };
    this.cookiesPerCust = function () {
        for (var j = 0; j < time.length; j++) {
            this.totalCookies = this.totalCookies + avgCookSale[j];
        }
    };
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
}

function formData(event) {
    event.preventDefault();
    var storeName = event.target.storeName.value;
    var minCusthour = event.target.minCusthour.value;
    var maxCusthour = event.target.maxCusthour.value;
    var avgCookSale = event.target.avgCookSale.value;

    new Store(storeName, minCusthour, maxCusthour, avgCookSale);

    listOfPlaces[listOfPlaces.length - 1].custHour();
    listOfPlaces[listOfPlaces.length - 1].cookiesPerCust();
    elTable.innerHTML = '' 
    createTable();
    form.reset();
    console.log('history', listOfPlaces);
};

function createTable() {
    tableHeader();
    for (var i = 0; i < listOfPlaces.length; i++) {
        listOfPlaces[i].showData();
    };
    tableFooter();

}
var form = document.getElementById('salmon_form');
form.addEventListener('submit', formData);

// creates avg customer for each hour from 6am to 8pm.

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

    for (i = 0; i < time.length; i++) { 
        var total = document.createElement('th');
        total.textContent = '';
        elRow.appendChild(total);

    }
    elTable.appendChild(elRow);
}

var pike = new Store('First and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac', 3, 24, 1.2);
var seattle = new Store('Seattle Center', 11, 38, 3.7);
var cap = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki Beach', 2, 16, 4.6);

for (var i = 0; i < listOfPlaces.length; i++) {
    listOfPlaces[i].custHour();
    listOfPlaces[i].cookiesPerCust();
}
elTable.innerHTML = ''
createTable();
