import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-content">

        <div className="about-text">
          <h2>About Us</h2>

          <p>
            Welcome to The Dining Room, where every dish is crafted
            with passion and every meal becomes a memorable
            experience.
          </p>

          <p>
            Our chefs combine authentic Italian recipes with
            modern culinary techniques to create exceptional
            flavors.
          </p>

          <button>Read More</button>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
            alt="Restaurant"
          />
        </div>

      </div>
    </section>
  );
}

export default About;