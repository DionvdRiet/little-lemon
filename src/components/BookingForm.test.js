import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

// test('Renders the BookingForm label', () => {
//     render(<BookingForm availableTimes={[]} />);

//     const labelElement = screen.getByText("Number of guests");
//     expect(labelElement).toBeInTheDocument();
// });

import { initializeTimes, updateTimes } from './BookingPage';
import { fetchAPI } from './api';

// test('initializeTimes returns the correct expected initial available times', () => {
//     // 1. Roep de functie aan
//     const initialTimes = initializeTimes();

//     // 2. Verwacht dat het resultaat gelijk is aan je verwachte array
//     const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

//     expect(initialTimes).toEqual(expectedTimes);
// });

jest.mock('../api', () => ({
    fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00', '20:00']),
}));

test('initializeTimes returns the expected non-empty array of available times', () => {
    const initialTimes = initializeTimes();

    expect(fetchAPI).toHaveBeenCalled();
    expect(Array.isArray(initialTimes)).toBe(true);
    expect(initialTimes.length).toBeGreaterThan(0);
    expect(initialTimes).toEqual(['17:00', '18:00', '19:00', '20:00']);
});


// test('updateTimes returns the same state that is provided', () => {
//     const initialState = ["17:00", "18:00", "19:00"];

//     const action = { type: 'UPDATE_TIMES' };

//     const result = updateTimes(initialState, action);

//     expect(result).toEqual(initialState);
// });

test('updateTimes returns updated times based on the dispatched date', () => {
    const initialState = ['17:00', '18:00', '19:00'];
    const action = { type: 'UPDATE_TIMES', date: '2026-11-20' };

    const result = updateTimes(initialState, action);

    expect(fetchAPI).toHaveBeenCalled();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result).toEqual(['17:00', '18:00', '19:00', '20:00']);
});