import { useState } from "react";
import "../styles/Checkout.css";
import OrderSuccessModal from "../components/OrderSuccessModal";

function CheckoutPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div className="checkout">

      <h1>Checkout</h1>

      <form
        className="checkout-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Full Name"
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          required
        />

        <textarea
          placeholder="Delivery Address"
          rows="4"
          required
        ></textarea>

        <textarea
          placeholder="Special Instructions"
          rows="3"
        ></textarea>

        <h3 className="payment-title">
          Payment Method
        </h3>

        <label className="payment-option">
          <input
            type="radio"
            name="payment"
            required
          />
          <span>Cash On Delivery</span>
        </label>

        <label className="payment-option">
          <input
            type="radio"
            name="payment"
          />
          <span>UPI</span>
        </label>

        <label className="payment-option">
          <input
            type="radio"
            name="payment"
          />
          <span>Credit / Debit Card</span>
        </label>

        <button
          type="submit"
          className="place-order-btn"
        >
          Place Order
        </button>

      </form>

      <OrderSuccessModal
        show={showSuccess}
        onClose={() => setShowSuccess(false)}
      />

    </div>
  );
}

export default CheckoutPage;