import './App.css';
import BookingForm from './BookingForm'; // Of '../components/BookingForm' afhankelijk van je mapstructuur

function BookingPage() {
  return (
    <div className="booking-page">
      <h1>Reserve a Table</h1>
      <BookingForm />
    </div>
  );
}

export default BookingPage;