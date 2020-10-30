import React, { Component } from 'react';
import Calendar from 'rc-year-calendar';
 
 
  function CalendarLP() {
    const dayClickHandler = (date, events) => {


      console.log("dayclick", date)
    }



    return (
      <div>
        <Calendar onDayClick = {dayClickHandler}/>
      </div>
    );
  }
  
  export default CalendarLP;