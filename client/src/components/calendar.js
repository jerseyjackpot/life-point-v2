import React, { Component, useEffect } from 'react';
import Calendar from 'rc-year-calendar';
import "../pages/style.css";
 
 
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