const page = require('./getPage')

const dateUpdatePoint = 'span.o-kurs-refresh-desc span.refresh-date';
const currencyPoint = 'td.sticky-col p';
const erateSellPoint = 'td p[rate-type=ERate-sell]';
const erateBuyPoint = 'td p[rate-type=ERate-buy]';
const ttSellPoint = 'td p[rate-type=TT-sell]';
const ttBuyPoint = 'td p[rate-type=TT-buy]';
const bankNotesSellPoint = 'td p[rate-type=BN-sell]';
const bankNotesBuyPoint = 'td p[rate-type=BN-buy]';

var dataList = [];

module.exports = page().then(($)=>{
    $(dateUpdatePoint).each((i,elm)=>{
        dataList.push({
            last_updated: $(elm).text().trim()
        });
    });
    $('tbody tr').each((i,elm)=>{
        dataList.push({
            mata_uang: $(elm).find(currencyPoint).text().trim(),
            eRate: {
                eRate_beli: $(elm).find(erateBuyPoint).text().trim(),
                eRate_jual: $(elm).find(erateSellPoint).text().trim(),
            },
            TTCounter: {
                TTCounter_beli: $(elm).find(ttBuyPoint).text().trim(),
                TTCounter_jual: $(elm).find(ttSellPoint).text().trim(),
            },
            BankNotes: {
                BankNotes_beli: $(elm).find(bankNotesBuyPoint).text().trim(),
                BankNotes_jual: $(elm).find(bankNotesSellPoint).text().trim(),
            },
        });
    });
    return dataList;
});
