$(document).ready(function() {

    $('#calendar').fullCalendar({
        defaultView: 'month',
        events: 'wolist.json',
        //events: 'https://fullcalendar.io/demo-events.json',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
          },
          //defaultDate: '2018-03-12',
          navLinks: true, // can click day/week names to navigate views
          editable: false,
          eventLimit: true, // allow "more" link when too many events
    });
    
});