import React from 'react';
import EventCalendar from '../../utility/big-calendar/event-calendar';

class Planner extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <div style={{ width: '100vw', height: '100vh',margin: '1rem', overflow: 'hidden'}}>
            {/* <h1>Schedule your Events</h1> */}
            <EventCalendar />
        </div>

        );
    }
}

export default Planner;