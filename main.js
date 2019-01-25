const request = require("request");
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const castle = require("./castle.js").Castle;
const url ='https://www.relaischateaux.com/us/destinations/france';

/* 
    castle.searchRestau('/france').then(body => {
      console.log(body);
    });
*/
    castle.getListHotels().then(response => {
      const hotels = response;
      console.log(hotels);
    });
    