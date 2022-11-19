import React from 'react';
import {AccumulationChartComponent, AccumulationSeriesDirective, AccumulationSeriesCollectionDirective, PieSeries,
  AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, Inject} from '@syncfusion/ej2-react-charts';

const PieChart = ({id, data, xName, yName, name, title}) => {
  return (
    <div className='p-2 shadow-lg bg-white rounded-lg'>
      <AccumulationChartComponent 
              id={id}
              enableSmartLabels={true}
              tooltip={{enable:true}}
              legendSettings={{
                  visible: true,
                  position:'Bottom',
                  }}
              title={title}>
          <Inject services={[AccumulationDataLabel, PieSeries, AccumulationLegend, AccumulationTooltip]} />
          <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective
                  dataSource={data} 
                  xName={xName}
                  yName={yName}
                  innerRadius='50%'
                  dataLabel={{
                    visible: true,
                    position: 'Outside'
                  }}>
              </AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default PieChart