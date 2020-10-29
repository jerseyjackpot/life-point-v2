import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
 
  function Calendar() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
  
  export default Calendar;