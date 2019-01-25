const axios = require("axios");
const request = require("request");
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const url = "https://www.relaischateaux.com/us/destinations/france";
//const url2 = "https://www.relaischateaux.com/us/destinations/europe";

var Castle = function() {};

/*Castle.prototype.searchRestau(searchTerm)= function(){
try{
return fetch(`${url2}${searchTerm}`).then(response => response.text())
}catch(error){
    console.log(error);
}
};*/


//Retrieving the list of all French hotels
Castle.prototype.getListHotels = function() {
    try {
      return axios.get(url).then(response => {
        const dataset = response.data;
        var beforeJson = dataset.match(/var oMapOptionsdestinationfranceMap = (.*?)<\/script>/ms)[1];
        var map = eval("(" + beforeJson + ")");
        var markers = map.markers;
        var stringJson = JSON.stringify(markers);//Convert a Javascript value to a json string
        return JSON.parse(stringJson);
      });
    } catch (error) {
      console.log(error);
    }
  };
  exports.Castle = new Castle();
  
 

