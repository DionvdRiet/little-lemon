import React, { useState } from 'react';
import './App.css';

function BookingForm() {
    // 1. Maak state-variabelen aan voor elk formulierveld
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00"); // Standaard tijd op 17:00 gezet
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    // 2. Maak een stateful array aan voor de beschikbare tijden (zoals gevraagd in de tip)
    const [availableTimes, setAvailableTimes] = useState([
        "17:00", 
        "18:00", 
        "19:00", 
        "20:00", 
        "21:00", 
        "22:00"
    ]);

    // Functie die wordt aangeroepen als het formulier wordt verzonden
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", { date, time, guests, occasion });
        // Hier komt later de API-aanroep (zoals submitAPI)
    };

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input 
                type="date" 
                id="res-date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
            />

            <label htmlFor="res-time">Choose time</label>
            <select 
                id="res-time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)}
            >
                {/* 3. Genereer de opties dynamisch op basis van de availableTimes array */}
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