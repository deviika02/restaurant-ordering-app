import "../styles/OrderSuccessModal.css";

function OrderSuccessModal({
  show,
  onClose,
  orderId,
}) {
  if (!show) return null;

  return (
    <div className="success-overlay">
      <div className="success-modal">

        <h1>🎉</h1>

        <h2>Order Placed Successfully</h2>

        <p>
          Your order has been received.
        </p>

        <p>
          Order ID: {orderId}
        </p>

        <p>
          Estimated Delivery:
          35-40 Minutes
        </p>

        <button onClick={onClose}>
          Continue
        </button>

      </div>
    </div>
  );
}

export default OrderSuccessModal;