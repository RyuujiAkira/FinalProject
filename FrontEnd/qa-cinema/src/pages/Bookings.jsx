import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Bookings = () => {

  const MakeBooking = () => {
    //const [booking, setBooking] = useState(null);
    //const [error, setError] = useState(null);

    const booking_actual = {
      "movieTitle": title,
      "dateTime": date,
      "userName": userName,
      "noOfSeats": seats,
      "adult": adults,
      "child": child,
      "concession": concession
    }

    axios
      .post("http://localhost:6969/create", booking_actual)
      .then((response) => {
        console.log(response.data);
        //setBooking(response.data);
      })
      .catch((err) => {
        //setError(err);
      });

  };

  const [title, setTitle] = useState("")
  const titleInput = useRef(null);

  let alterTitle = () => {
    setTitle(titleInput.current.value)
    console.log(title);
  }



  //------------------------------------

  const [date, setDate] = useState("")
  const dateInput = useRef(null);

  let alterDate = () => {
    setDate(dateInput.current.value)
    console.log(date);
  }



  //------------------------------------

  const [userName, setUserName] = useState("")
  const userNameInput = useRef(null);

  let alterUserName = () => {
    setUserName(userNameInput.current.value);
    console.log(userName);
  }



  //------------------------------------

  const [seats, setSeats] = useState("")
  const seatInput = useRef(null);

  let alterSeats = () => {
    setSeats(seatInput.current.value);
    console.log(seats);
  }

  //------------------------------------

  const [adults, setAdults] = useState("")
  const adultInput = useRef(null);

  let alterAdults = () => {
    setAdults(adultInput.current.value);
    console.log(adults);
  }


  //------------------------------------

  const [child, setChild] = useState("")
  const childInput = useRef(null);

  let alterChild = () => {
    setChild(childInput.current.value);
    console.log(child);
  }



  //------------------------------------

  const [concession, setConcession] = useState("")
  const concessionInput = useRef(null);

  let alterConcession = () => {
    setConcession(concessionInput.current.value);
    console.log(concession);
  }



  //*********************************************************************** */



  //********************************************** */
  const clearForms = () => {
    setConcession(0);
    concessionInput.current.value = null;
    setAdults(0);
    adultInput.current.value = null;
    setChild(0);
    childInput.current.value = null;
    setDate(null);
    dateInput.current.value = null;
    setSeats(0);
    seatInput.current.value = null;
    setUserName("");
    userNameInput.current.value = null;
    setTitle("");
    titleInput.current.value = null;
    console.log("Form Data Cleared");
  }

  //************************************** */
  return (<div>
    <h1>Make your Booking</h1>
    <span>Movie</span>
    <form onSubmit={MakeBooking}>
      <input type="text" id="Title" onChange={alterTitle} ref={titleInput} />
      <span>Date</span>
      <input type="datetime" onChange={alterDate} id="date" ref={dateInput} />
      <span>Username</span>
      <input type="text" onChange={alterUserName} id="username" ref={userNameInput} />
      <span>Seats</span>
      <input type="number" onChange={alterSeats} id="seats" ref={seatInput} />
      <span>Adult</span>
      <input type="number" onChange={alterAdults} id="adult" ref={adultInput} />
      <span>Child</span>
      <input type="number" onChange={alterChild} id="child" ref={childInput} />
      <span>Concession</span>
      <input type="number" id="concession" onChange={alterConcession} ref={concessionInput} />
      <button type="submit" id="data">Book Now</button>
    </form>
    <p>Is your order booked?</p>


    <Button variant="primary" id="listingTimeBTN" as={Link} to={"/payment"}  >
      Pay Now
    </Button>



    <script src="BookingForm.js"></script>


  </div>);
};

export default Bookings;
