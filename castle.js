const puppeteer = require('puppeteer');

let chateauURL = 'https://www.relaischateaux.com/fr/destinations/europe/france';
(async function main(){
try{
const browser=await puppeteer.launch({headless:false});
const page =await browser.newPage();

await page.goto('https://experts.shopify.com/');
await page.waitForSelector('.section');

const sections = await page.$$('.section');

for(let i=0;i<5;i++)
{
await page.goto('https://experts.shopify.com/');
await page.waitForSelector('.section');

const sections = await page.$$('.section');


const section=sections[i];
const button=await section.$('a.marketing-button')
const buttonName= await page.evaluate(button=>button.innerText,button);
button.click();

await page.waitForSelector('#ExpertsResults')

const lis=await page.$$('#ExpertsResults > li')
for(const li of lis)
{

const name=await li.$eval('h2',(h2)=>h2.innerText);
console.log('name',name)
}
}
}

catch(e){
console.log('our error',e);

}





})();
