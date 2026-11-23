import { useLocation } from 'react-router-dom';
import '../App.css';
import bookingImg from '../assets/restaurant.jpg';

function formatBookingLabel(dateString, time, guests) {
    if (!dateString || !time) return 'Reservation confirmed';

    const [year, month, day] = dateString.split('-').map(Number);
    if (!year || !month || !day) return 'Reservation confirmed';

    const dateObj = new Date(year, month - 1, day);

    // Korte Engelse dagnaam, bijv. "Tue"
    const weekday = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
    // Dag en Nederlandse maand zonder jaartal, bijv. "24 november"
    const dayAndMonth = dateObj.toLocaleDateString('nl-NL', {
        day: 'numeric',
        month: 'long',
    });

    const numericGuests = Number(guests);
    const guestPart = numericGuests > 0
        ? ` - ${numericGuests} ${numericGuests === 1 ? 'guest' : 'guests'}`
        : '';

    return `${weekday} ${dayAndMonth} at ${time}${guestPart}`;
}

function ConfirmedBooking() {
    const location = useLocation();
    const { date, time, guests } = location.state || {};

    return (
        <div className='bookingConfirmation'>
            <img src={bookingImg} alt="restaurant" className="bookingImg" />
                        <h2>Booking confirmed!</h2>
            <div className='label'>
                {formatBookingLabel(date, time, guests)}
            </div>
            {/* <p>We can't wait to serve you</p> */}
        </div>
    );
}

export default ConfirmedBooking;