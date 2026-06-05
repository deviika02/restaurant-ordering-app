import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Toast from "./Toast";
import "../styles/MenuModal.css";

function MenuModal({ item, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const { addToCart } = useContext(CartContext);

  if (!item) return null;

  const handleAddToCart = () => {
    addToCart(item, quantity);

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      onClose();
    }, 2000);
  };

  return (
    <>
      <Toast
        message={`✅ ${item.name} added to cart`}
        show={showToast}
      />

      <div
        className="modal-overlay"
        onClick={onClose}
      >
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={item.image}
            alt={item.name}
          />

          <h2>{item.name}</h2>

          <p>{item.description}</p>

          <h3>₹{item.price}</h3>

          <div className="quantity-box">

            <button
              onClick={() =>
                quantity > 1 &&
                setQuantity(quantity - 1)
              }
            >
              -
            </button>

            <span>{quantity}</span>

            <button
              onClick={() =>
                setQuantity(quantity + 1)
              }
            >
              +
            </button>

          </div>

          <button
            className="add-cart-btn"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>

          <button
            className="close-btn"
            onClick={onClose}
          >
            Close
          </button>

        </div>
      </div>
    </>
  );
}

export default MenuModal;