import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <main className="success-page">
      <div className="success-card">
        <div className="success-icon">✓</div>

        <p className="success-label">ORDER CONFIRMED</p>

        <h1>Thank you for your order.</h1>

        <p className="success-text">
          Your order has been placed successfully. We’ll send you
          an update when your order is on its way.
        </p>

        <div className="order-number">
          <span>Order number</span>
          <strong>#SS-2026-0813</strong>
        </div>

        <Link to="/products" className="continue-btn">
          Continue Shopping
          <span>→</span>
        </Link>
      </div>
    </main>
  );
}

export default OrderSuccess;