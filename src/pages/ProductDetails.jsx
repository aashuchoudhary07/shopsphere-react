import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SuccessModal from "../components/SuccessModal";
import { formatPrice } from "../utils/formatPrice";


import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);
  const [addedProduct, setAddedProduct] = useState(null);

  const [showModal, setShowModal] = useState(false);

  if (!product) {
    return (
      <main className="product-not-found">
        <span>404</span>

        <h1>Product not found</h1>

        <p>
          The product you're looking for doesn't exist.
        </p>

        <Link to="/products">
          ← Back to collection
        </Link>
      </main>
    );
  }

  const total = product.price * quantity;

  return (
    <main className="product-details-page">

      <div className="product-details-container">

        {/* Product Image */}

        <motion.div
          className="details-image"
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img
            src={product.image}
            alt={product.name}
          />

          <span className="details-badge">
            {product.badge}
          </span>
        </motion.div>

        {/* Product Information */}

        <motion.div
          className="details-content"
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <Link
            to="/products"
            className="back-link"
          >
            ← Back to collection
          </Link>

          <span className="details-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <div className="details-rating">
            <span>★</span>
            {product.rating}
            <small> · 124 reviews</small>
          </div>

          <div className="details-price">
  <strong>
    {formatPrice(product.price)}
  </strong>

  <del>
    {formatPrice(product.oldPrice)}
  </del>

  <span>
    Save{" "}
    {formatPrice(
      product.oldPrice - product.price
    )}
  </span>
</div>

          <p className="details-description">
            Designed with simplicity and everyday
            functionality in mind, this carefully selected
            piece brings a refined touch to your space.
            Thoughtful materials and timeless design make
            it an easy addition to any collection.
          </p>

          {/* Quantity */}

          <div className="quantity-section">

            <span>Quantity</span>

            <div className="quantity-control">

              <button
                onClick={() =>
                  setQuantity(
                    Math.max(1, quantity - 1)
                  )
                }
              >
                −
              </button>

              <strong>
                {quantity}
              </strong>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
              >
                +
              </button>

            </div>

          </div>

          {/* Add To Cart */}

          <motion.button
  className="add-cart-button"
  whileHover={{
    scale: 1.02,
  }}
  whileTap={{
    scale: 0.97,
  }}
  onClick={() => {
  addToCart(product, quantity);
  setAddedProduct(product);
}}
>
  Add to cart

  <span>
  {formatPrice(total)}
</span>
</motion.button>

          {/* Product Info */}

          <div className="details-features">

            <div>
              <strong>Free shipping</strong>
              <span>On orders over $100</span>
            </div>

            <div>
              <strong>Easy returns</strong>
              <span>30-day return policy</span>
            </div>

            <div>
              <strong>Secure checkout</strong>
              <span>Your payment is protected</span>
            </div>

          </div>

        </motion.div>

      </div>

      {showModal && (
  <SuccessModal
    productName={product.name}
    onClose={() => setShowModal(false)}
  />
)}
        {addedProduct && (
  <SuccessModal
    product={addedProduct}
    onClose={() => setAddedProduct(null)}
  />
)}

    </main>
  );
}

export default ProductDetails;