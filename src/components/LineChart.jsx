import React from 'react';
import { Category, ChartComponent, ColumnSeries, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip, Legend, DataLabel, Inject } from '@syncfusion/ej2-react-charts';

const LineChart = ({id, data, xTitle, yTitle, title, xName, yName}) => {
  return (
    <div className='p-2 shadow-lg bg-white rounded-lg'>
        <ChartComponent 
            id={id}
            primaryXAxis={{valueType: 'Category', title: `${xTitle}`}} 
            primaryYAxis={{labelFormat: '${value}', title: `${yTitle}`}}
            title={title}
            tooltip={{enable:true}}>
        <Inject services={[ColumnSeries, Tooltip, LineSeries, Category, DataLabel, Legend]}/>
        <SeriesCollectionDirective>
            <SeriesDirective dataSource={data} xName={xName} yName={yName} type='Column'/>
        </SeriesCollectionDirective>
        </ChartComponent>
    </div>
  )
}

export default LineChart