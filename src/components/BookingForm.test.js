// import { render, screen } from "@testing-library/react";
// import BookingForm from './BookingForm';

// test('Renders the BookingForm label', () => {
//     render(<BookingForm availableTimes={[]} />);

//     const labelElement = screen.getByText("Number of guests");
//     expect(labelElement).toBeInTheDocument();
// });

// Importeer de functie vanuit je BookingPage (zorg dat je 'initializeTimes' daar exporteert!)
// import { initializeTimes } from './BookingPage';

// test('initializeTimes returns the correct expected initial available times', () => {
//     // 1. Roep de functie aan
//     const initialTimes = initializeTimes();

//     // 2. Verwacht dat het resultaat gelijk is aan je verwachte array
//     const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

//     expect(initialTimes).toEqual(expectedTimes);
// });


import { updateTimes } from './BookingPage';

test('updateTimes returns the same state that is provided', () => {
    // 1. Maak een initiële state aan (een array met tijden om te testen)
    const initialState = ["17:00", "18:00", "19:00"];
    
    // 2. Maak een actie aan (die je straks via dispatch meestuurt)
    const action = { type: 'UPDATE_TIMES' };

    // 3. Roep updateTimes aan met de state en action
    const result = updateTimes(initialState, action);

    // 4. Controleer of het resultaat exact gelijk is aan de state die je erin stopte
    expect(result).toEqual(initialState);
});