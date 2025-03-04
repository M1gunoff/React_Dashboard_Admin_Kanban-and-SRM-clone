import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./Calendar.css";
import useCalendar from "../../store/Calendar";
import ruLocale from '@fullcalendar/core/locales/ru'



const Calendar = () => {

    let eventGuid = 0;

    function createEventId() {
    return String(eventGuid++);
    }

    const {currentEvents, setCurrentEvents} = useCalendar()

    const handleEvents = async (events) => {
        await Promise.resolve(setCurrentEvents(events))
    }

    const handleEventClick = (clickInfo) => {
        if (
            confirm('Вы уверены, что хотите удалить событие?')
        )
         clickInfo.event.remove()
    }

    const handleDateSelect = (selectInfo) => {
        let title = prompt('Пожалуйста, введите название мероприятия')
        let calendarApi = selectInfo.view.calendar;

        calendarApi.unselect();

        if(title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.start,
                end: selectInfo.end,
                allDay: selectInfo.allDay
            })
        }
    }

  return (
    <div className="calendar-container">
        <div>
            <FullCalendar locale={ruLocale} plugins= {[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
                left: 'prev, next today',
                center: 'title',
                right: "dayGridMonth, timeGridWeek, timeGridDay"
            }}

            allDaySlot={false} 
            initialView="timeGridWeek"
            slotDuration={"01:00:00"}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            nowIndicator={true}
            initialEvents={currentEvents}
            eventsSet={handleEvents}
            select={handleDateSelect}
            eventClick={handleEventClick}
            />
        </div>
    </div>
  )
}

export default Calendar
