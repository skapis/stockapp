import React from 'react';
import { Header } from '../components';
import getData from '../functions/getData';
import APIURL from '../data/APIConn';
import { useState, useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Filter, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';


const transactionsData = require('../data/transactions.json')
const dataSource = 'File'


const Transactions = () => {

  const [transactions, setTransaction] = useState(transactionsData);

  const fetchData = async () => {
    await getData(APIURL.APIURL, [{'type': 'detail'}, {'data': 'transactions'}]).then(trData => {setTransaction(trData)})
  }


  useEffect(() => {
    if (dataSource === 'API'){
        fetchData();
    }
  },[])

  return(
    <div className='container mx-auto my-5 h-full'>
      <div className='px-10'>
          <Header title="Transactions" size="2"/>
      </div>
      <div className='px-10'>
        <GridComponent
          id='transactionsGrid' 
          dataSource={transactions.data} 
          allowPaging={true} 
          allowSorting={true} 
          pageSettings={{pageSize:10}}>
          <ColumnsDirective>
            <ColumnDirective field='ticker' headerText='Symbol' width='100'/>
            <ColumnDirective field='date' headerText='Date' width='100'/>
            <ColumnDirective field='shares' headerText='Shares' width='100'/>
            <ColumnDirective field='costs' headerText='Costs' width='100' format='n2'/>
            <ColumnDirective field='costs_per_share' headerText='Costs per Share' width='100' format='n2'/>
            <ColumnDirective field='broker' headerText='Broker' width='100'/>
            <ColumnDirective field='type' headerText='Type' width='100'/>
          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter, Group]}/>
        </GridComponent>
      </div>
    </div>
  )
}

export default Transactions;
