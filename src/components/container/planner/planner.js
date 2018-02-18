import React from 'react';
import EventCalendar from '../../utility/big-calendar/event-calendar';

class Planner extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <div>
            <h1>Planner Component</h1>
            <EventCalendar />
        </div>

        );
    }
}

export default Planner;