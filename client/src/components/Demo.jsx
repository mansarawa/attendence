import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const events = [
  { title: 'Present', start: new Date() }
]

export function DemoApp() {
  return (
    <div   style={{width:'500px'}}>
      <h1>Attendence App</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        events={events}
        eventContent={renderEventContent}
      
      />
    </div>
  )
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      {/* <b>{eventInfo.timeText}</b> */}
      <i>{eventInfo.event.title}</i>
    </>
  )
}