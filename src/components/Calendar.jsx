import React from 'react';
import { ScheduleComponent, Day, Week, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';


const Calendar = ({data}) => {
  return (
    <div className='m-2 md:m-10 mt-10 p-2 md:p-10 bg-white rounded-lg shadow-lg'>
        <ScheduleComponent
            height="650px"
            currentView='Month'
            eventSettings={{dataSource: data, }}
            selectedDate = {new Date()}
        >
            <Inject services={[Day, Week, Month, Agenda, Resize, DragAndDrop]}/>
        </ScheduleComponent>
    </div>
  )
}

export default Calendar