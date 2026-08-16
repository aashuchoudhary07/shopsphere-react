import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import SuccessModal from "../components/SuccessModal";

function Wishlist() {
  const {
    wishlistItems,
    toggleWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  const [addedProduct, setAddedProduct] = useState(null);

  return (
    <main className="wishlist-page">

      {wishlistItems.length === 0 ? (

        /* EMPTY WISHLIST */

        <div className="wishlist-empty">

          <span className="wishlist-empty-icon">
            ♡
          </span>

          <span className="wishlist-label">
            SAVED ITEMS
          </span>

          <h1>Your Wishlist</h1>

          <p>
            You haven't saved any products yet.
            Explore our collection and save the pieces
            you love.
          </p>

          <Link
            to="/products"
            className="wishlist-shop-button"
          >
            Explore Collection →
          </Link>

        </div>

      ) : (

        /* WISHLIST WITH PRODUCTS */

        <>
          <section className="wishlist-header">

            <span className="wishlist-label">
              YOUR SAVED COLLECTION
            </span>

            <h1>Wishlist</h1>

            <p>
              {wishlistItems.length}{" "}
              {wishlistItems.length === 1
                ? "item"
                : "items"}{" "}
              saved for later.
            </p>

          </section>


          <section className="wishlist-grid">

            {wishlistItems.map((product, index) => (

              <motion.article
                key={product.id}
                className="wishlist-card"

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}

                whileHover={{
                  y: -6,
                }}
              >

                {/* IMAGE */}

                <div className="wishlist-image">

                  <Link
                    to={`/products/${product.id}`}
                  >
                    <motion.img
                      src={product.image}
                      alt={product.name}

                      whileHover={{
                        scale: 1.05,
                      }}

                      transition={{
                        duration: 0.45,
                      }}
                    />
                  </Link>


                  {/* REMOVE */}

                  <button
                    className="wishlist-remove"
                    onClick={() =>
                      toggleWishlist(product)
                    }
                    aria-label={
                      `Remove ${product.name} ` +
                      `from wishlist`
                    }
                  >
                    ♥
                  </button>

                </div>


                {/* PRODUCT INFO */}

                <div className="wishlist-card-content">

                  <div className="wishlist-meta">

                    <span>
                      {product.category}
                    </span>

                    <span>
                      ★ {product.rating}
                    </span>

                  </div>


                  <h2>
                    {product.name}
                  </h2>


                  <div className="wishlist-price">
  <strong>
    {formatPrice(product.price)}
  </strong>

  <del>
    {formatPrice(product.oldPrice)}
  </del>
</div>


                  {/* ACTIONS */}

                  <div className="wishlist-actions">

                    <Link
                      to={`/products/${product.id}`}
                      className="wishlist-view"
                    >
                      View Product
                    </Link>


                    <button
                      className="wishlist-cart"

                      onClick={() => {

                        // Add to cart
                        addToCart(product, 1);

                        // Remove from wishlist
                        toggleWishlist(product);

                        // Show premium popup
                        setAddedProduct(product);

                      }}
                    >
                      Add to Cart
                      <span>→</span>
                    </button>

                  </div>

                </div>

              </motion.article>

            ))}

          </section>
        </>
      )}


      {/* PREMIUM SUCCESS MODAL */}

      {addedProduct && (
  <SuccessModal
    product={addedProduct}
    onClose={() => setAddedProduct(null)}
  />
)}

    </main>
  );
}

export default Wishlist;