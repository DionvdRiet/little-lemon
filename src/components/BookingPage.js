import './App.css';
import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

// 1. Functie die de initiële tijden teruggeeft
const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// 2. Reducer-functie die de tijden bijwerkt op basis van acties (zoals een nieuwe datum)
const updateTimes = (state, action) => {
    // Voor nu mag deze functie simpelweg de huidige state teruggeven, 
    // ongeacht welke datum er is gekozen.
    return state;
};

function BookingPage() {
    // 3. Gebruik de useReducer hook in plaats van useState
    // 'availableTimes' is de data, 'dispatch' is de "afstandsbediening" om de reducer te activeren
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <div className="booking-page">
            <h1>Reserve a Table</h1>
            {/* We sturen zowel de tijden als de dispatch-functie door naar het formulier */}
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    );
}

export default BookingPage;