import React from 'react'
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars'

import { scheduleData} from '../data/dummy'
import { Header } from '../components'
function Calendar() {
  return (
    <div className = "m-2  md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
          <ScheduleComponent
            width="100%"
            height="650px"
            selectedDate={new Date(2021, 0, 10)}
            eventSettings={{ dataSource: scheduleData }}
          >
          <ViewsDirective>
            { ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
          </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
          </ScheduleComponent>

      
    </div>
  )
}

export default Calendar
