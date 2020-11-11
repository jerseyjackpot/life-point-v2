import React, {  useEffect } from 'react';
import Calendar from 'rc-year-calendar';
import "../pages/style.css";
import Nav from '../components/navbar';
import API from '../utils/API';
 
 
  function CalendarLP() {


    const dayClickHandler = (date, events) => {
      console.log("dayclick", date)
      API.getDate(date)

      console.log("dayclick", date)
    }

    return (
      <>
      <Nav />
        <Calendar onDayClick = {dayClickHandler}/>
      </>
    );
  }
  
  export default CalendarLP;