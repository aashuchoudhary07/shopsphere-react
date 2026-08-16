import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

function Cart() {
    const navigate = useNavigate();
  const {
    cartItems,
    cartCount,
    cartTotal,
    removeFromCart,
    updateQuantity,
  } = useCart();

  return (
    <main className="cart-page cart-page-offset">
      <div className="cart-container">
        <div className="cart-header">
          <div>
            <p className="cart-eyebrow">YOUR BAG</p>
            <h1>Your Cart</h1>
            <p>
              {cartCount === 0
                ? "Your cart is currently empty."
                : `${cartCount} item${cartCount > 1 ? "s" : ""} in your cart.`}
            </p>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty.</h2>
            <p>Discover something worth bringing home.</p>
            <a href="/products" className="continue-shopping">
              Continue Shopping →
            </a>
          </div>
        ) : (
          <div className="cart-layout">
            <section className="cart-items">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="cart-item-info">
                    <p className="cart-item-category">
                      {item.category}
                    </p>

                    <h2>{item.name}</h2>

                    <p className="cart-item-price">
  {formatPrice(item.price)}
</p>

                    <button
                      className="remove-item"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="cart-item-controls">
                    <div className="quantity-control">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>

                    <strong>
                      {formatPrice(item.price * item.quantity)}
                    </strong>
                  </div>
                </article>
              ))}
            </section>

            <aside className="cart-summary">
              <p className="summary-label">ORDER SUMMARY</p>

              <div className="summary-row">
                <span>Subtotal</span>
                <strong>
                  {formatPrice(cartTotal)}
                </strong>
              </div>

              <div className="summary-row">
  <span>Shipping</span>
  <span>Free</span>
</div>

              <div className="summary-divider"></div>

              <div className="summary-total">
  <span>Total</span>
  <strong>
    {formatPrice(cartTotal)}
  </strong>
</div>

              <button
                className="checkout-button"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
                <span>→</span>
              </button>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}

export default Cart;