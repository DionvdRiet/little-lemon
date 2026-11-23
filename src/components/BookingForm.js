import React, { useState } from 'react';
import '../App.css';

function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    const [touched, setTouched] = useState({ date: false, guests: false });

    const today = new Date().toISOString().split("T")[0];
    const numericGuests = Number(guests);

    const isDateValid = date.trim() !== "" && date >= today;
    const isGuestsValid = Number.isInteger(numericGuests) && numericGuests >= 1 && numericGuests <= 10;
    const isTimeValid = time.trim() !== "";
    const isFormValid = isDateValid && isGuestsValid && isTimeValid;

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouched({ date: true, guests: true });

        if (!isFormValid) return;

        submitForm({
            date,
            time,
            guests: numericGuests,
            occasion: occasion.trim(),
        });
    };

    return (
        <form style={{ display: 'grid', maxWidth: '280px', gap: '16px' }} className="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                min={today}
                value={date}
                required
                onChange={(e) => {
                    const newDate = e.target.value;
                    setDate(newDate);
                    setTouched((prev) => ({ ...prev, date: true }));
                    dispatch({ type: 'UPDATE_TIMES', date: newDate });
                }}
                onBlur={() => setTouched((prev) => ({ ...prev, date: true }))}
            />
            {touched.date && !isDateValid && (
                <span role="alert" style={{ color: 'red', fontSize: '0.85rem' }}>
                    Kies vandaag of een datum in de toekomst.
                </span>
            )}

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                required
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
                required
                onChange={(e) => {
                    setGuests(e.target.value);
                    setTouched((prev) => ({ ...prev, guests: true }));
                }}
                onBlur={() => setTouched((prev) => ({ ...prev, guests: true }))}
            />
            {touched.guests && !isGuestsValid && (
                <span role="alert" style={{ color: 'red', fontSize: '0.85rem' }}>
                    Aantal gasten moet tussen 1 en 10 liggen.
                </span>
            )}

            <label htmlFor="occasion">Message for the staff</label>
            <input
                type="text"
                id="occasion"
                placeholder="Max 100 words..."
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            />

            <input
                type="submit"
                value="Confirm reservation"
                disabled={!isFormValid}
                aria-label="On Click"
            />
        </form>
    );
}

export default BookingForm;