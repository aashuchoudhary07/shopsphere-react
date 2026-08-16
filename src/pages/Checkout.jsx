import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  return (
    <main className="checkout-page">
      <div className="checkout-container">

        <div className="checkout-left">
          <p className="checkout-label">CHECKOUT</p>
          <h1>Complete your order.</h1>

          <form
            className="checkout-form"
                onSubmit={(e) => {
                e.preventDefault();
                clearCart();
                navigate("/order-success");
                }}
           >

            <div className="form-section">
              <h2>Contact information</h2>

              <label>
                Email address
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Phone number
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                />
              </label>
            </div>

            <div className="form-section">
              <h2>Shipping address</h2>

              <label>
               Full name
                <input
                  type="text"
                  placeholder="Your full name"
                  required
                />
              </label>

              <label>
                Address
                <input
                  type="text"
                  placeholder="House no., street, area"
                  required
                />
              </label>

              <div className="form-row">
                <label>
                  City
                  <input
                    type="text"
                    placeholder="City"
                    required
                  />
                </label>

                <label>
                  State
                  <input
                    type="text"
                    placeholder="State"
                    required
                  />
                </label>
              </div>

              <label>
                PIN code
                <input
                  type="text"
                  placeholder="247667"
                  required
                />
              </label>
            </div>

            <div className="form-section">
              <h2>Payment method</h2>

              <div className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                />
                <div>
                  <strong>Cash on Delivery</strong>
                  <span>Pay when your order arrives.</span>
                </div>
              </div>

              <div className="payment-option">
                <input
                  type="radio"
                  name="payment"
                />
                <div>
                  <strong>Online Payment</strong>
                  <span>UPI, cards and net banking.</span>
                </div>
              </div>
            </div>

            <button type="submit" className="place-order-btn">
              Place Order
              <span>→</span>
            </button>

          </form>
        </div>

        <aside className="checkout-summary">
          <p className="summary-label">ORDER SUMMARY</p>

          {cartItems.map((item) => (
            <div className="checkout-item" key={item.id}>
              <div>
                <strong>{item.name}</strong>
                <span>Qty: {item.quantity}</span>
              </div>

              <strong>
                  {formatPrice(item.price * item.quantity)}
              </strong>
            </div>
          ))}

                <div className="summary-line">
  <span>Subtotal</span>
  <strong>{formatPrice(cartTotal)}</strong>
</div>

          <div className="summary-line">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="summary-total">
  <span>Total</span>
  <strong>{formatPrice(cartTotal)}</strong>
</div>
        </aside>

      </div>
    </main>
  );
}

export default Checkout;