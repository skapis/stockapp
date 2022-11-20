# React Stocks App
This directory contains a simple React App, which use SyncFusion components to show stocks portfolio data from JSON Files or custom API from Google Sheets.

## App Description
There are only 3 pages in the App. On the first page "Dashboard", which is also home page, user can see widgets with aggregated data of portfolio, chart with top 10 companies in portfolio by market value, chart with portfolio value by year and table grid with all companies in portfolio. 
On the second page "Transactions" is only table grid with all transactions, which user made. 

On the third page "Dividends" are widgets with total dividends and dividend yields, chart with top 10 stocks by received dividends, chart with received dividends by year. Also there is a dividend calendar, which shows declaration date, ex date, record date and pay date for companies in portfolio. At the bottom of the page is table grid with all dividends records.


## Dashboard

![/ReactJS - StockApp/Dashboard.png](https://github.com/skapis/appscreenshots/blob/729bd6185cd5f165b035da3562036b06c6b55264/ReactJS%20-%20StockApp/Dashboard.png)

## Transactions
![/ReactJS - StockApp/Transactions.png](https://github.com/skapis/appscreenshots/blob/729bd6185cd5f165b035da3562036b06c6b55264/ReactJS%20-%20StockApp/Transactions.png)

## Dividends
![/ReactJS - StockApp/DividendsPage.png](https://github.com/skapis/appscreenshots/blob/729bd6185cd5f165b035da3562036b06c6b55264/ReactJS%20-%20StockApp/DividendsPage.png)


# Data Source and set Data Source
App is ready to fetch data from REST API and also from JSON files. In directory [data](https://github.com/skapis/stockapp/tree/main/src/data) there are some JSON files with dummy data for example.

Data Source for app is files by default. If you want to switch to REST API, you can do it by set variable `dataSource` from `"File"` to `"API"`. This variable is on the each page. So if you changed `dataSource` on one page, the other page will still have default `dataSource`.

## API
Before you set variable `dataSource` to API, you have to define url of endpoints. You can do this in file [APIConn.js](src/data/APIConn.js)

There is simple json, which contains urls for api.
```
const APIURL = {
    'APIURL': 'API Base URL',
    "DivURL": 'API Url for Dividend Calendar data'
}
```

**Currently is designed for my Google Sheets API. So if you want to change it, you will have to change mapping of data**





