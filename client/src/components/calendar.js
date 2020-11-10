import React, {  useEffect } from 'react';
import Calendar from 'rc-year-calendar';
import "../pages/style.css";
import Nav from '../components/navbar';
import API from '../utils/API';
 
 
  function CalendarLP() {


    const dayClickHandler = (date, events) => {
      API.get("/api/entry/")

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