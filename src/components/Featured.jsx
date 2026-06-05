import "../styles/Featured.css";

function Featured() {
  return (
    <section className="featured">

      <h2>Chef's Specials</h2>

      <div className="featured-container">

        <div className="featured-card">
          <h3>🔥 Truffle Pasta</h3>
          <p>
            Handmade pasta with black truffle cream sauce.
          </p>
        </div>

        <div className="featured-card">
          <h3>⭐ Signature Steak</h3>
          <p>
            Premium grilled steak cooked to perfection.
          </p>
        </div>

        <div className="featured-card">
          <h3>🍰 Chocolate Lava Cake</h3>
          <p>
            Warm chocolate cake with molten center.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Featured;