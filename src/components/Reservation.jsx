import "../styles/Reservation.css";

function Reservation() {
  return (
    <section className="reservation" id="reservation">

      <h2>Reserve Your Table</h2>

      <form className="reservation-form">

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="tel"
          placeholder="Phone Number"
        />

        <input
          type="date"
        />

        <input
          type="time"
        />

        <input
          type="number"
          placeholder="Number of Guests"
        />

        <button type="submit">
          Book Now
        </button>

      </form>

    </section>
  );
}

export default Reservation;