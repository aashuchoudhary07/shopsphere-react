import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

function SuccessModal({ product, onClose }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="success-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="success-modal premium-success-modal"
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 25,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 15,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={(e) => e.stopPropagation()}
        >

          {/* Close */}
          <button
            className="success-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>

          {/* Success Icon */}
          <motion.div
            className="success-icon"
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 0.12,
              type: "spring",
              stiffness: 220,
              damping: 15,
            }}
          >
            ✓
          </motion.div>

          <span className="success-label">
            ADDED TO CART
          </span>

          {/* Product Preview */}
          <div className="success-product">

            <div className="success-product-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="success-product-info">
              <span>
                {product.category}
              </span>

              <h2>
                {product.name}
              </h2>

              <div className="success-price">
                <strong>
                  {formatPrice(product.price)}
                </strong>

                {product.oldPrice && (
                  <del>
                    {formatPrice(product.oldPrice)}
                  </del>
                )}
              </div>
            </div>

          </div>

          <p className="success-message">
            This item has been successfully added to
            your shopping bag.
          </p>

          {/* Actions */}
          <div className="success-actions">

            <Link
              to="/cart"
              className="success-cart-button"
              onClick={onClose}
            >
              <span>View Cart</span>
              <span>→</span>
            </Link>

            <button
              className="success-continue-button"
              onClick={onClose}
            >
              Continue Shopping
            </button>

          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SuccessModal;