import { useState } from "react";
import "../styles/Menu.css";
import menuItems from "../data/menuData";
import MenuModal from "./MenuModal";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = [
    "All",
    "Pizza",
    "Pasta",
    "Burger",
    "Dessert",
    "Drinks",
    "Seafood",
    "Salad",
    "Steak"
  ];

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const searchMatch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <section className="menu" id="menu">
      <h2>Our Special Menu</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search dishes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="menu-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category
                ? "active-filter"
                : ""
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-container">
        {filteredItems.map((item) => (
          <div
            className="menu-card"
            key={item.id}
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={item.image}
              alt={item.name}
            />

            <h3>{item.name}</h3>

            <p>{item.description}</p>

            <span>₹{item.price}</span>
          </div>
        ))}
      </div>

      <MenuModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}

export default Menu;