import '../App.css';
import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from './api';

const initializeTimes = () => {
    return fetchAPI(new Date());
};

const updateTimes = (state, action) => {
    return fetchAPI(new Date(action.date));
};

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();

    const submitForm = (formData) => {
        const isSubmitted = submitAPI(formData);
        if (isSubmitted) {
            navigate('/confirmed');
        }
    };

    return (
        <div className="booking-page">
            <h1>Reserve a Table</h1>
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />
        </div>
    );
}

export { initializeTimes, updateTimes };
export default BookingPage;