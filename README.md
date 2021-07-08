# Bank Central Asia (BCA) Exchange Rates API

## Description

This is API to get Indonesian Rupiah Exchange Rates directly from BCA. The data was scraped directly from [BCA Kurs Page](https://www.bca.co.id/id/informasi/kurs).

The API only consist of `GET` method that will return a respond of the following:

- Last Update Time
- Currency
- e-Rate (Buy & Sell)
- TT Counter (Buy & Sell)
- Bank Notes (Buy & Sell)

## Installation

```bash
# Clone this repository
$ git clone https://github.com/amirhsn/bca-exchange-rates.git
```

## Notes
In some very rare cases, `500` or `504` error status will raised, just refresh the URL, it is a problem that arises from Lambda running on Vercel, so the best practice is to wrap the GET method with exception handler.
