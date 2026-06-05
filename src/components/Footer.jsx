import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div>
          <h2>The Dining Room</h2>
          <p>
            Experience luxury dining with exceptional food
            and unforgettable moments.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
        </div>

        <div>
          <h3>Contact</h3>

          <p>📞 +91 9876543210</p>
          <p>✉️ info@thediningroom.com</p>
          <p>📍 Pune, India</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 The Dining Room. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;