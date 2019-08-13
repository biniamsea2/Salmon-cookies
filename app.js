'use strict';

var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(storeName, minCusthour, maxCusthour, avgCookSale) {//only need to add the things that are changing between each location.But I added them all just becuase. If you want to remove you must remove the ones under this comment as well.
    this.storeName = storeName;
    this.minCusthour = minCusthour;
    this.maxCusthour = maxCusthour;
    this.avgCookSale = avgCookSale;
    this.avgCusthour = [];
    this.avgCookhour = [];
    this.totalCookies = 0;
    Store.listOfPlaces.push(this); //push all new Stores into the listOfPlaces array.

    // created avg customer generator for each hour from 6am to 8pm.
    this.custHour = function () {
        for (var i = 0; i < time.length; i++) {
            var custOnehour = Math.floor(Math.random() * (this.maxCusthour - this.minCusthour + 1)) + this.minCusthour
            this.avgCusthour.push(custOnehour);
        }
    };
    this.cookiesPerCust = function () {
        for (var j = 0; j < time.length; j++) {
            console.log(this.avgCusthour[j])
            this.totalCookies += this.avgCusthour[j];
        }
    };
    // Creates the list and appends it to the DOM
    this.listStuff = function () {
        var all = document.createElement('div');
        all.innerHTML = '<h3>' + this.storeName + '</h3>';
        document.body.appendChild(all);


        var list = document.createElement('ul');
        var listArr = [];

        for (var i = 0; i < time.length; i++) {
            if (i < time.length) {
                listArr.push('<li>' + time[i] + ': ' + this.avgCusthour[i] + ' cookies</li>');
            }
        }
        listArr.push('<li> Total: ' + this.totalCookies + ' cookies</li>');

        var final = listArr.join('');
        list.innerHTML = final;
        document.body.appendChild(list);
    };
}
Store.listOfPlaces = []; //Created listOfPlaces array and set it empty.

//Don't need 'var' because you can find each Store in the array ex:([1,2,3]), but added it anyways. Only added the things that are changin in the parameters for each place.
var pike = new Store('First and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac', 3, 24, 1.2);
var seattle = new Store('Seattle Center', 11, 38, 3.7);
var cap = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki Beach', 2, 16, 4.6);

//made for loop that will console.log each Store in the listOfPlaces array.
for (var i = 0; i < Store.listOfPlaces.length; i++) {
    Store.listOfPlaces[i].custHour();
    Store.listOfPlaces[i].cookiesPerCust();
    Store.listOfPlaces[i].listStuff();
}