import React, { useState } from 'react';
import '../App.css';

// 1. Vang hier nu ook 'dispatch' op via de props
function BookingForm({ availableTimes, dispatch }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00"); 
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", { date, time, guests, occasion });
    };

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            
            {/* 2. HIER komt de aangepaste input voor de datum met dispatch */}
            <input 
                type="date" 
                id="res-date" 
                value={date} 
                onChange={(e) => {
                    setDate(e.target.value);
                    // Dit seintje stuurt de gekozen datum door naar de reducer in BookingPage
                    dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
                }} 
            />

            <label htmlFor="res-time">Choose time</label>
            <select 
                id="res-time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)}
            >
                {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number" 
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests" 
                value={guests} 
                onChange={(e) => setGuests(e.target.value)} 
            />

            <label htmlFor="occasion">Occasion</label>
            <select 
                id="occasion" 
                value={occasion} 
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;