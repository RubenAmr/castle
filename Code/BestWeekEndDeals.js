const fetch = require('node-fetch');
const fs = require('fs');
var tabResult = [];

async function adx() {
    //const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-5&idEntity=22684%7C%7CSTD1DG&pax=2&room=1", {"credentials":"include","headers":{"accept":"application/json, text/javascript, /; q=0.01","accept-language":"fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7","x-requested-with":"XMLHttpRequest"},"referrer":"https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor","referrerPolicy":"origin-when-cross-origin","body":null,"method":"GET","mode":"cors"});
    //console.log(await response.json());

    //console.log("Deuxieme hotel")
    getSaturdayPerMonth("May");
    //console.log(tabResult[1]);
    var a = 1;
    var tableau = [];
    while (a) {
        if (a == 1) {
            const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-5&idEntity=56232%7C%7CSTD1DG&pax=2&room=1", { "credentials": "include", "headers": { "accept": "application/json, text/javascript, /; q=0.01", "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7", "x-requested-with": "XMLHttpRequest" }, "referrer": "https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor", "referrerPolicy": "origin-when-cross-origin", "body": null, "method": "GET", "mode": "cors" });
            //console.log(await response.json());
            tableau.push(await response.json());
            a = 2;
        }
        if (a == 2) {

            const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-5&idEntity=67196%7C%7CSTD1DG&pax=2&room=1", { "credentials": "include", "headers": { "accept": "application/json, text/javascript, /; q=0.01", "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7", "x-requested-with": "XMLHttpRequest" }, "referrer": "https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor", "referrerPolicy": "origin-when-cross-origin", "body": null, "method": "GET", "mode": "cors" });
            //console.log(await response.json());
            tableau.push(await response.json());

            a = 3;
        }
        if (a == 3) {

            const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-5&idEntity=22598%7C%7CSTD1DG&pax=2&room=1", { "credentials": "include", "headers": { "accept": "application/json, text/javascript, /; q=0.01", "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7", "x-requested-with": "XMLHttpRequest" }, "referrer": "https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor", "referrerPolicy": "origin-when-cross-origin", "body": null, "method": "GET", "mode": "cors" });
            //console.log(await response.json());
            tableau.push(await response.json());

            a = 4;
        }
        if (a == 4) {

            const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-5&idEntity=22650%7C%7CSTD1DG&pax=2&room=1", { "credentials": "include", "headers": { "accept": "application/json, text/javascript, /; q=0.01", "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7", "x-requested-with": "XMLHttpRequest" }, "referrer": "https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor", "referrerPolicy": "origin-when-cross-origin", "body": null, "method": "GET", "mode": "cors" });
            //console.log(await response.json());
            tableau.push(await response.json());

            a = 5;


        }
        if (a == 5) {

            const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-5&idEntity=22756%7C%7CSTD1DG&pax=2&room=1", { "credentials": "include", "headers": { "accept": "application/json, text/javascript, /; q=0.01", "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7", "x-requested-with": "XMLHttpRequest" }, "referrer": "https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor", "referrerPolicy": "origin-when-cross-origin", "body": null, "method": "GET", "mode": "cors" });
            //console.log(await response.json());
            tableau.push(await response.json());

            a = 6;

        }


        if (a == 6) {

            const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-5&idEntity=22827%7C%7CSTD1DG&pax=2&room=1", { "credentials": "include", "headers": { "accept": "application/json, text/javascript, /; q=0.01", "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7", "x-requested-with": "XMLHttpRequest" }, "referrer": "https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor", "referrerPolicy": "origin-when-cross-origin", "body": null, "method": "GET", "mode": "cors" });
            //console.log(await response.json());
            tableau.push(await response.json());

            a = 7;

        }

        if (a == 7) {

            const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-5&idEntity=55836%7C%7CSTD1DG&pax=2&room=1", { "credentials": "include", "headers": { "accept": "application/json, text/javascript, /; q=0.01", "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7", "x-requested-with": "XMLHttpRequest" }, "referrer": "https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor", "referrerPolicy": "origin-when-cross-origin", "body": null, "method": "GET", "mode": "cors" });
            //console.log(await response.json());
            tableau.push(await response.json());

            a = 8;

        }

        if (a == 8) {

            const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-5&idEntity=22657%7C%7CSTD1DG&pax=2&room=1", { "credentials": "include", "headers": { "accept": "application/json, text/javascript, /; q=0.01", "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7", "x-requested-with": "XMLHttpRequest" }, "referrer": "https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor", "referrerPolicy": "origin-when-cross-origin", "body": null, "method": "GET", "mode": "cors" });
            //console.log(await response.json());
            tableau.push(await response.json());

            a = 9;

        }

        if (a == 9) {

            const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-5&idEntity=22875%7C%7CSTD1DG&pax=2&room=1", { "credentials": "include", "headers": { "accept": "application/json, text/javascript, /; q=0.01", "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7", "x-requested-with": "XMLHttpRequest" }, "referrer": "https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor", "referrerPolicy": "origin-when-cross-origin", "body": null, "method": "GET", "mode": "cors" });
            //console.log(await response.json());
            tableau.push(await response.json());

            a = 10;

        }


        if (a == 10) {

            const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-5&idEntity=22685%7C%7CSTD1DG&pax=2&room=1", { "credentials": "include", "headers": { "accept": "application/json, text/javascript, /; q=0.01", "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7", "x-requested-with": "XMLHttpRequest" }, "referrer": "https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor", "referrerPolicy": "origin-when-cross-origin", "body": null, "method": "GET", "mode": "cors" });
            //console.log(await response.json());
            tableau.push(await response.json());

            a = 11;

        }

        if (a == 11) {

            const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-5&idEntity=22580%7C%7CSTD1DG&pax=2&room=1", { "credentials": "include", "headers": { "accept": "application/json, text/javascript, /; q=0.01", "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7", "x-requested-with": "XMLHttpRequest" }, "referrer": "https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor", "referrerPolicy": "origin-when-cross-origin", "body": null, "method": "GET", "mode": "cors" });
            //console.log(await response.json());
            a = 12;

        }

        if (a == 12) {

            const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-5&idEntity=71632%7C%7CSTD1DG&pax=2&room=1", { "credentials": "include", "headers": { "accept": "application/json, text/javascript, /; q=0.01", "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7", "x-requested-with": "XMLHttpRequest" }, "referrer": "https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor", "referrerPolicy": "origin-when-cross-origin", "body": null, "method": "GET", "mode": "cors" });
            //console.log(await response.json());
            tableau.push(await response.json());

            a = 13;

        }
        if (a == 13) {

            const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-5&idEntity=22652%7C%7CSTD1DG&pax=2&room=1", { "credentials": "include", "headers": { "accept": "application/json, text/javascript, /; q=0.01", "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7", "x-requested-with": "XMLHttpRequest" }, "referrer": "https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor", "referrerPolicy": "origin-when-cross-origin", "body": null, "method": "GET", "mode": "cors" });
            //console.log(await response.json());
            tableau.push(await response.json());

            a = 14;

        }

        if (a == 14) {

            const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-5&idEntity=22649%7C%7CSTD1DG&pax=2&room=1", { "credentials": "include", "headers": { "accept": "application/json, text/javascript, /; q=0.01", "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7", "x-requested-with": "XMLHttpRequest" }, "referrer": "https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor", "referrerPolicy": "origin-when-cross-origin", "body": null, "method": "GET", "mode": "cors" });
            //console.log(await response.json());
            tableau.push(await response.json());

            a = 15;

        }

        if (a == 15) {

            const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-5&idEntity=22765%7C%7CSTD1DG&pax=2&room=1", { "credentials": "include", "headers": { "accept": "application/json, text/javascript, /; q=0.01", "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7", "x-requested-with": "XMLHttpRequest" }, "referrer": "https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor", "referrerPolicy": "origin-when-cross-origin", "body": null, "method": "GET", "mode": "cors" });
            //console.log(await response.json());
            tableau.push(await response.json());

            a = 16;

        }

        if (a == 16) {

            const response = await fetch("https://www.relaischateaux.com/fr/popin/availability/check?month=2019-5&idEntity=22926%7C%7CSTD1DG&pax=2&room=1", { "credentials": "include", "headers": { "accept": "application/json, text/javascript, /; q=0.01", "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7", "x-requested-with": "XMLHttpRequest" }, "referrer": "https://www.relaischateaux.com/fr/france/castelclara-morbihan-bangor", "referrerPolicy": "origin-when-cross-origin", "body": null, "method": "GET", "mode": "cors" });
            //console.log(await response.json());
            tableau.push(await response.json());

            a = 0;

        }



    }
    fs.writeFileSync("Test.json", JSON.stringify(tableau));
    var json1 = require('./Test.json');

    //Trier les valeurs par ordre croissant :

    var ia = 0;
    var ib = 0;
    var result = [];
    var tableau2 = [];
    for (var n = 0; n < json1.length; n++) {
        console.log(json1[n]['2019-5'].notAvailable);


        while (ia < tabResult.length && ib < json1[n]['2019-5'].notAvailable.length) {
            if (tabResult[ia] < json1[n]['2019-5'].notAvailable[ib]) { ia++; }
            else if (tabResult[ia] > json1[n]['2019-5'].notAvailable[ib]) { ib++; }

            else /* valeur identique => on garde */ {
                result.push(tabResult[ia]);
                ia++;
                ib++;
            }
        }

        if (result.length === 0) {
            result = tabResult;
        }
        console.log(result);


        var result2 = tabResult;

        console.log(result2);
        var j = 0;
        var tmp = 0

        for (var i = 0; i < result2.length; i++) {
            j = result2[i];
            tmp = j;
            var txt = tmp + " : " + json1[n]['2019-5'].pricesPerDay[tmp];
            console.log(txt);

            tableau2.push(txt);


        }
    }
    fs.writeFileSync("weekendmay.json", JSON.stringify(tableau2));

    //console.log(json1['2019-5'].pricesPerDay[2]);

}

//adx();
function combineJson() {
    var json1 = require('./nameLink.json');
    var json2 = require('./weekendmay.json');
    var json3 = [];
    for (var i = 0; i < json1.length; i++) {       
                json3.push({ "hotel Name ": json1[i].name, "Link for Reservation": json1[i].link, "Price": json2[i] })

    }
    fs.writeFileSync("bestDealsMay.json", JSON.stringify(json3));

}
combineJson();

    //synxis_id



    //22926
    function getSaturday() {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        var lgMois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        for (i = 0; i <= 11; i++) {
            for (j = 1; j < lgMois[i]; j++) {
                var maDate = new Date(monthNames[i] + " " + j + ", 2019");
                var nJour = maDate.getDay();
                if (nJour === 6) {
                    console.log(maDate.toString());
                }
            }
        }
    }

    //getSaturday();

    function getSaturdayPerMonth(month) {
        size = 0;
        var lgMois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (month === "January") {
            size = lgMois[0];
        }
        else if (month === "February") {
            size = lgMois[1];
        }
        else if (month === "March") {
            size = lgMois[2];
        }
        else if (month === "April") {
            size = lgMois[3];
        }
        else if (month === "May") {
            size = lgMois[4];
        }
        else if (month === "June") {
            size = lgMois[5];
        }
        else if (month === "July") {
            size = lgMois[6];
        }
        else if (month === "August") {
            size = lgMois[7];
        }
        else if (month === "September") {
            size = lgMois[8];
        }
        else if (month === "October") {
            size = lgMois[9];
        }
        else if (month === "November") {
            size = lgMois[10];
        }
        else if (month === "December") {
            size = lgMois[11];
        }
        for (j = 1; j < size; j++) {
            var maDate = new Date(month + " " + j + ", 2019");
            var nJour = maDate.getDay();
            var date = maDate.getDate();

            if (nJour === 6) {
                //console.log(date.toString());
                tabResult.push(date.toString());
            }
        }
        console.log(tabResult);


    }

//getSaturdayPerMonth("March");