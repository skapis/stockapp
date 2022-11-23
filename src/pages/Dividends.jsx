import React from 'react';
import { useEffect, useState } from 'react';
import { Header, Widget, PieChart, LineChart, Calendar } from '../components';
import dataWrangling from '../functions/dataWrangling';
import getData from '../functions/getData';
import APIURL from '../data/APIConn';
import PortfolioCurrency from '../functions/currency';
import { GridComponent, ColumnsDirective, ColumnDirective, Filter, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';

const dataSource = 'File';
const yearDiv = require('../data/dividendsYear.json')
const stocksData = require('../data/stocks.json')
const dividendsData = require('../data/dividends.json')
const calendarData = require('../data/calendar.json')

const Dividends = () => {
  const [stocks, setStocks] = useState(stocksData);
  const [yearData, setYearData] = useState(yearDiv);
  const [dividends, setDividends] = useState(dividendsData);
  const [calendar, setCalendar] = useState(calendarData);
  const [currency, getCurrency] = useState(PortfolioCurrency.getCurrency())

  const fetchData = async () => {
    await getData(APIURL.APIURL, [{'type': 'aggregated'}]).then(stockData => {setStocks(stockData)})
    await getData(APIURL.APIURL, [{'by': 'year'},{'data':'dividends'}]).then(yearDivData => {setYearData(yearDivData)})
    await getData(APIURL.APIURL, [{'type': 'detail'}, {'data':'dividends'}]).then(diviData => {setDividends(diviData)})
    await getData(APIURL.DivURL).then(calData =>{setCalendar(calData)})
  }

  useEffect(() => {
    if (dataSource === 'API'){
        fetchData();
    }
    getCurrency(PortfolioCurrency.getCurrency())
  },[])

  return (
    <div className='mx-auto my-5'>
      <div className='px-10'>
        <Header title="Dividends" size="3"/>
      </div>
      <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3 px-10 mb-5'>
          <Widget title="Total Dividends" value={dataWrangling.totalVal(stocks.data, 'dividends')} currency={currency}/>
          <Widget title="Dividend Yield (Investment)" value={dataWrangling.dividendYield(dataWrangling.totalVal(stocks.data, 'dividends'), dataWrangling.totalVal(stocks.data, 'total')) + ' %' }/>
          <Widget title="Dividend Yield (Market)" value={dataWrangling.dividendYield(dataWrangling.totalVal(stocks.data, 'dividends'), dataWrangling.totalVal(stocks.data, 'market')) + ' %' }/>
      </div>
      <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-2 px-10 rounded-lg'>
        <PieChart
          id='dividendChart'
          data={dataWrangling.topBy(stocks.data, 'dividends', 10)}
          xName='ticker' yName='dividends' name='ticker'
          title={`Top 10 Stocks by Dividends in ${currency}`}
        />
        <LineChart
          id='dividendByYear'
          data={yearData.data}
          xTitle='Year' yTitle='Amount' xName='year' yName='total'
          title={`Dividends by Year in ${currency}`}
        />
      </div>
      <div>
        <div className='px-10 mt-10'>
          <Header title="Dividend Calendar" size="2"/>
        </div>
        <Calendar data={calendar.items}/>
      </div>
      <div className='px-10'>
        <div className='mt-10'>
          <Header title="Dividend Records" size="2"/>
        </div>
        <GridComponent
          id='dividendsGrid' 
          dataSource={dividends.data} 
          allowPaging={true} 
          allowSorting={true} 
          pageSettings={{pageSize:10}}>
          <ColumnsDirective>
            <ColumnDirective field='ticker' headerText='Symbol' width='100'/>
            <ColumnDirective field='date' headerText='Date' width='100'/>
            <ColumnDirective field='description' headerText='Description' width='100'/>
            <ColumnDirective field='amount' headerText={`Amount (${currency})`} width='100' format='n2'/>
            <ColumnDirective field='broker' headerText='Broker' width='100'/>
          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter, Group]}/>
        </GridComponent>
      </div>
    </div>
  )
}

export default Dividends