import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Bookings = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);
  const titleInput = useRef(null);
  const MakeBooking = () => {
    const booking_actual = {
      movieTitle: title,
      dateTime: date,
      userName: userName,
      noOfSeats: seats,
      adult: adults,
      child: child,
      concession: concession,
    };

    axios
      .post("http://localhost:6969/create", booking_actual)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        setError(err);
      });
    alert("Booking recieved, Please click pay now");
  };

  let alterTitle = () => {
    setTitle(titleInput.current.value);
    console.log(title);
  };

  const [date, setDate] = useState("");
  const dateInput = useRef(null);

  let alterDate = () => {
    setDate(dateInput.current.value);
    console.log(date);
  };

  const [userName, setUserName] = useState("");
  const userNameInput = useRef(null);

  let alterUserName = () => {
    setUserName(userNameInput.current.value);
    console.log(userName);
  };

  const [seats, setSeats] = useState("");
  const seatInput = useRef(null);

  let alterSeats = () => {
    setSeats(seatInput.current.value);
    console.log(seats);
  };

  const [adults, setAdults] = useState("");
  const adultInput = useRef(null);

  let alterAdults = () => {
    setAdults(adultInput.current.value);
    console.log(adults);
  };

  const [child, setChild] = useState("");
  const childInput = useRef(null);

  let alterChild = () => {
    setChild(childInput.current.value);
    console.log(child);
  };

  const [concession, setConcession] = useState("");
  const concessionInput = useRef(null);

  let alterConcession = () => {
    setConcession(concessionInput.current.value);
    console.log(concession);
  };

  return (
    <div class="booking">
      <h1 class="bookingHead">Make your Booking</h1>
      <br />

      <form onSubmit="return false">
        <Form.Label class="label">Movie Title</Form.Label>
        <Form.Control
          class="bookingfield"
          type="text"
          id="Title"
          onChange={alterTitle}
          ref={titleInput}
        />
        <br />
        <Form.Label class="label">Date</Form.Label>
        <Form.Control
          class="bookingfield"
          type="datetime-local"
          onChange={alterDate}
          id="date"
          ref={dateInput}
        />
        <br />
        <Form.Label class="label">Username</Form.Label>
        <Form.Control
          class="bookingfield"
          class="bookingfield"
          type="text"
          onChange={alterUserName}
          id="username"
          ref={userNameInput}
        />
        <br />
        <Form.Label class="label">Seats</Form.Label>
        <Form.Control
          class="bookingfield"
          type="number"
          onChange={alterSeats}
          id="seats"
          ref={seatInput}
        />
        <br />
        <Form.Label class="label">Adult Admissions</Form.Label>
        <Form.Control
          class="bookingfield"
          type="number"
          onChange={alterAdults}
          id="adult"
          ref={adultInput}
        />
        <br />
        <Form.Label class="label">Child Admissions</Form.Label>
        <Form.Control
          class="bookingfield"
          type="number"
          onChange={alterChild}
          id="child"
          ref={childInput}
        />
        <br />
        <Form.Label class="label">Consession</Form.Label>
        <Form.Control
          class="bookingfield"
          type="number"
          id="concession"
          onChange={alterConcession}
          ref={concessionInput}
        />

        <br />
        <Button type="button" id="data" onClick={MakeBooking}>
          Book Now
        </Button>
      </form>
      <p class="bookingHead">Is your order booked?</p>

      <Button variant="primary" id="listingTimeBTN" as={Link} to={"/payment"}>
        Pay Now
      </Button>

      <script src="BookingForm.js"></script>
    </div>
  );
};

export default Bookings;
