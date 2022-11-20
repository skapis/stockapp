import React, { useState, useEffect } from 'react';
import { Header, Widget, PieChart, LineChart } from '../components';
import { GridComponent, ColumnsDirective, ColumnDirective, Filter, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';
import dataWrangling from '../functions/stocksDataWrangling';
import getData from '../functions/getData';
import APIURL from '../data/APIConn';

const dataSource = 'File'
const stocksData = require('../data/stocks.json')
const portfolioYear = require('../data/portfolioYear.json')

const Dashboard = () => {
    const [stocks, setStocks] = useState(stocksData);
    const [yearData, setYearData] = useState(portfolioYear);

    const fetchData = async () => {
        await getData(APIURL.APIURL, [{'type': 'aggregated'}]).then(stockData => {setStocks(stockData)})
        await getData(APIURL.APIURL, [{'by': 'year'}]).then(portfolioData => {setYearData(portfolioData)})
    }

    useEffect(() => {
        if (dataSource === 'API'){
            fetchData();
        }
    },[])
    
    return (
        <div className='container mx-auto my-5'>
            <div className='px-10'>
                <Header title="Dashboard" size="2"/>
            </div>
            <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4 px-10 mb-5'>
                <Widget title="Portfolio Value" value={dataWrangling.totalVal(stocks.data, 'total')} currency='$'/>
                <Widget title="Market Value" value={dataWrangling.totalVal(stocks.data, 'market')} currency='$'/>
                <Widget title="Gain/Loss" value={dataWrangling.gainLoss(dataWrangling.totalVal(stocks.data, 'market'), dataWrangling.totalVal(stocks.data, 'total'))[0] } currency='$' prc={dataWrangling.gainLoss(dataWrangling.totalVal(stocks.data, 'market'), dataWrangling.totalVal(stocks.data, 'total'))[1]}/>
                <Widget title="Total Dividends" value={dataWrangling.totalVal(stocks.data, 'dividends')} currency='$'/>
            </div>
            <div className='grid gap-6 xl:grid-cols-2 md:grid-cols-2 px-10 rounded-lg'>
                <div>
                    <PieChart
                        id='stockChart'
                        data={dataWrangling.topBy(stocks.data, 'market', 10)}
                        xName='ticker' yName='market' name='ticker'
                        title='Top 10 Stocks in portfolio by Market Value'
                    />
                </div>
                <div>
                    <LineChart
                        id='portfolioByYear'
                        data={yearData.data}
                        xTitle='Year' yTitle='Value' xName='year' yName='total'
                        title='Portfolio Value by Year'
                    />
                </div>
            </div>
            <div className='p-10'>
                <GridComponent dataSource={stocks.data} allowPaging={true} allowSorting={true} >
                    <ColumnsDirective>
                        <ColumnDirective field='ticker' headerText='Symbol' width='100'/>
                        <ColumnDirective field='total' headerText='Total Value' width='100'/>
                        <ColumnDirective field='market' headerText='Market Value' width='100'/>
                        <ColumnDirective field='shares' headerText='Shares' width='100'/>
                        <ColumnDirective field='dividends' headerText='Dividends' width='100'/>
                    </ColumnsDirective>
                    <Inject services={[Page, Sort, Filter, Group]}/>
                </GridComponent>
            </div>
        </div>
    )
}

export default Dashboard