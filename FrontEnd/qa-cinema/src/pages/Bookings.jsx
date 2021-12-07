const Bookings = () => {
  return (<div>
    <h1>Make your Booking</h1>
    <span>Movie</span>

    <input type="text" />
    <span>Date</span>
    <input type="datetime-local" />
    <span>Username</span>
    <input type="text" />
    <span>Seats</span>
    <input type="number" />
    <span>Adult</span>
    <input type="number" />
    <span>Child</span>
    <input type="number" />
    <span>Concession</span>
    <input type="number" />

    <p>Is your order booked?</p>
    <button type="button">Book Now</button>
  </div>);
};

export default Bookings;
