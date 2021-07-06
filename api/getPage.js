const cheerio = require("cheerio");
const dataPromise = require('./getData');

const page = async ()=>{
    const webPage = await dataPromise();
    const $ = cheerio.load(webPage);
    return $;
};

module.exports = page;