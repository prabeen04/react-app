import React from 'react';
import EventCalendar from '../../utility/big-calendar/event-calendar';

const Planner = () => <div 
                        style={{ width: '100vw', height: '100vh',margin: '1rem', overflow: 'hidden'}}>
                        <EventCalendar />
                      </div>

export default Planner;