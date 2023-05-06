# React Stocks App
This directory contains a simple React App, which uses SyncFusion components to show stocks portfolio data from JSON Files or custom API from Google Sheets.

## App Description
There are only 3 pages in the App. On the first page, "Dashboard", which is also the home page, users can see widgets with aggregated data of the portfolio, a chart with the top 10 companies in the portfolio by market value, a chart with portfolio value by year and table grid with all companies in the portfolio. 
On the second page, "Transactions" is only a table grid with all users transactions. 

On the third page, "Dividends", are widgets with total dividends and dividend yields, a chart with the top 10 stocks by received dividends, chart with received dividends by the year. On the page is also a dividend calendar which shows the declaration date, ex-date, record date and pay date for companies in the portfolio. At the bottom of the page is a table grid with all dividends records.


## Dashboard

![/ReactJS - StockApp/Dashboard.png](https://github.com/skapis/appscreenshots/blob/729bd6185cd5f165b035da3562036b06c6b55264/ReactJS%20-%20StockApp/Dashboard.png)

## Transactions
![/ReactJS - StockApp/Transactions.png](https://github.com/skapis/appscreenshots/blob/729bd6185cd5f165b035da3562036b06c6b55264/ReactJS%20-%20StockApp/Transactions.png)

## Dividends
![/ReactJS - StockApp/DividendsPage.png](https://github.com/skapis/appscreenshots/blob/729bd6185cd5f165b035da3562036b06c6b55264/ReactJS%20-%20StockApp/DividendsPage.png)


# Data Source and set Data Source
The app is ready to fetch data from REST API and also from JSON files. In the directory [data](https://github.com/skapis/stockapp/tree/main/src/data), there are some JSON files with dummy data.

The data Source for the app is JSON files by default. If you want to switch to REST API, you can do it by setting the variable `dataSource` from `"File"` to `"API"`. This variable is on each page. So if you changed `dataSource` on one page, the other page will still have the default `dataSource`.

## API
Before you set variable `dataSource` to API, you have to define url of endpoints. You can do this in file [APIConn.js](src/data/APIConn.js)

There is a simple json, which contains urls for api.
```
const APIURL = {
    'APIURL': 'API Base URL',
    "DivURL": 'API Url for Dividend Calendar data'
}
```

**Currently is designed for my Google Sheets API. So if you want to change it, you will have to change mapping of data**
