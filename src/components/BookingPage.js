import '../App.css';
import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI } from './api';

const initializeTimes = () => {
    return fetchAPI(new Date());
};

const updateTimes = (state, action) => {
    return fetchAPI(new Date(action.date));
};

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <div className="booking-page">
            <h1>Reserve a Table</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    );
}

export { initializeTimes, updateTimes };
export default BookingPage;