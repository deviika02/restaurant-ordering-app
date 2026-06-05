import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="overlay">

        <h1>Experience Luxury Dining</h1>

        <p>
        Where Every Meal Becomes A Memory
        </p>

       <div className="hero-buttons">

  <a href="#menu">
    <button>View Menu</button>
  </a>

  <a href="#reservation">
    <button>Reserve Table</button>
  </a>

</div>

      </div>

    </section>
  );
}

export default Hero;