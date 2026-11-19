import '../App.css';
import bookingImg from '../assets/restaurant.jpg';

function ConfirmedBooking(){
    return(
        <div className='bookingConfirmation'>
            <img src={bookingImg} alt="restaurant" className="bookingImg" />
            <div className='label'>19 november - 19:00</div>
            <h2>Booking confirmed!</h2>
            <p>We can't wait to serve you</p>
        </div>
    );
}

export default ConfirmedBooking;