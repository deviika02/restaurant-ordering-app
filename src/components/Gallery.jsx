import "../styles/Gallery.css";

function Gallery() {
  return (
    <section className="gallery" id="gallery">

      <h2>Food Gallery</h2>

      <div className="gallery-container">

        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
          alt="Pizza"
        />

        <img
          src="https://images.unsplash.com/photo-1551024601-bec78aea704b"
          alt="Drink"
        />

        <img
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
          alt="Food"
        />

        <img
          src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
          alt="Salad"
        />

        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Dinner"
        />

        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
          alt="Steak"
        />

      </div>

    </section>
  );
}

export default Gallery;