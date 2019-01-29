var cheerio = require('cheerio');
var request = require('request');
var Promise = require('promise');
var fs = require('fs');


var individualListOfPromises = [];
var listOfPromises = [];
var listOfrestaurants = [];


function newPromises() {
    //We have 35 pages to check, so let's apply a loop on the URL to get all the results of the 35 pages
    for (i = 1; i < 36; i++) { 
        let url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-' + i.toString();
        listOfPromises.push(fillListOfRestaurants(url));
        console.log("Page " + i + " added to the list");
    }
}

function promisesForEachUrl() {
    return new Promise( resolve =>  {
        for (i = 0; i < listOfrestaurants.length; i++) {
            let restaurantURL = listOfrestaurants[i].url;
            console.log(listOfrestaurants[i].url); //let's print all the url's restaurants
            individualListOfPromises.push(fillInfos(restaurantURL, i));
            console.log("url :" + i + 1 + "th restaurant");
        }
        resolve();
    })
}

//Fill the list of the restaurant with a restaurant object with their URL
function fillListOfRestaurants(url) { 
    return new Promise(function (resolve, reject) {
        request(url, function (err, res, html) {
            if (err) {
                console.log(err)
                return reject(err);
            }
            else if (res.statusCode !== 200) { 
                err = new Error("Unexpected status code : " + res.statusCode);
                err.res = res;
                return reject(err);
            }
            var $ = cheerio.load(html);
            $('.poi-card-link').each(function () {
                let data = $(this);
                let link = data.attr("href");
                let url = "https://restaurant.michelin.fr/" + link;
                listOfrestaurants.push({ "name": "", "postalCode": "", "chef": "", "url": url })
            })
            resolve(listOfrestaurants);
        });
    });
}


//fil informations of restaurants with their adress, name ,chef and postal code 
function fillInfos(url, index) { 
    return new Promise(function (resolve, reject) {
        request(url, function (err, res, html) {
            if (err) {
                console.error(err);
                return reject(err);
            }
            else if (res.statusCode !== 200) {
                err = new Error("Unexpected status code : " + res.statusCode);
                err.res = res;
                return reject(err);
            }

            const $ = cheerio.load(html);
            $('.poi_intro-display-title').first().each(function () { //To have the name of each restaurant
                let data = $(this);
                let name = data.text();
                name = name.replace(/\n/g, "");
                listOfrestaurants[index].name = name;
            })

            $('.postal-code').first().each(function () {
                let data = $(this);
                let zipCode = data.text();
                listOfrestaurants[index].postalCode = zipCode;
            })

            //By taking the selector of the chef's name we have acces directly
            $('#node_poi-menu-wrapper > div.node_poi-chef > div > div > div.field__items > div').first().each(function () {
                let data = $(this);
                let chefname = data.text();
                listOfrestaurants[index].chef = chefname;
            })
            console.log("info : " + index + "th restaurant")
            resolve(listOfrestaurants);
        });
    });
}

//save informations into a jsonfile
function saveInfoJson() {
    return new Promise(resolve => {
        try {
            console.log("Trying JSON file");
            var jsonRestaurants = JSON.stringify(listOfrestaurants);
            
            fs.writeFile("starredRestaurants.json", jsonRestaurants, function doneWriting(err) {
                if (err) { console.error(err); }
            });
        }
        catch (error) {
            console.error(error);
        }
        resolve();
    });
}
newPromises();
Promise.all(listOfPromises)
    .then(promisesForEachUrl)
    .then(() => { return Promise.all(individualListOfPromises); })
    .then(saveInfoJson)
    .then(() => { console.log("Successfuly saved !!") });