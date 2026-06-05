import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useContext(CartContext);

  const grandTotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "120px 10%",
        background: "#111",
        color: "white",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
          fontSize: "3rem",
        }}
      >
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                marginTop: "20px",
                padding: "25px",
                background: "#1a1a1a",
                borderRadius: "15px",
                border:
                  "1px solid rgba(212,175,55,0.2)",
                boxShadow:
                  "0 5px 20px rgba(0,0,0,0.4)",
              }}
            >
              <h3
                style={{
                  fontSize: "2rem",
                  marginBottom: "15px",
                }}
              >
                {item.name}
              </h3>

              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                  style={{
                    background: "#D4AF37",
                    border: "none",
                    color: "#111",
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  −
                </button>

                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    minWidth: "30px",
                    textAlign: "center",
                  }}
                >
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                  style={{
                    background: "#D4AF37",
                    border: "none",
                    color: "#111",
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>

              <p
                style={{
                  marginTop: "15px",
                  fontSize: "1.2rem",
                }}
              >
                Total: ₹
                {item.price * item.quantity}
              </p>

              <button
                onClick={() =>
                  removeItem(item.id)
                }
                style={{
                  marginTop: "15px",
                  background: "#c0392b",
                  border: "none",
                  color: "white",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Remove Item
              </button>
            </div>
          ))}

          <div
            style={{
              marginTop: "50px",
            }}
          >
            <h2
              style={{
                fontSize: "2.2rem",
              }}
            >
              Grand Total: ₹{grandTotal}
            </h2>

            <Link to="/checkout">
              <button
                style={{
                  marginTop: "20px",
                  background: "#D4AF37",
                  border: "none",
                  padding: "15px 30px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Proceed To Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;