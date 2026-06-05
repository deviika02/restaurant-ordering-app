import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Contact Us</h2>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Visit Us</h3>

          <p>
            📍 The Dining Room,
            Viman Nagar, Pune, India
          </p>

          <p>
            📞 +91 9876543210
          </p>

          <p>
            ✉️ info@thediningroom.com
          </p>

          <p>
            🕒 Mon - Sun : 10:00 AM - 11:00 PM
          </p>

        </div>

        <div className="contact-map">

          <iframe
            title="restaurant-location"
            src="https://www.google.com/maps?q=Viman+Nagar+Pune&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </section>
  );
}

export default Contact;