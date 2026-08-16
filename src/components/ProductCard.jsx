import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { formatPrice } from "../utils/formatPrice";

function ProductCard({ product, index }) {
  const {
    toggleWishlist,
    isWishlisted,
  } = useWishlist();

  const wishlisted = isWishlisted(product.id);

  return (
    <motion.article
      className="product-card"
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
    >
      <Link
        to={`/products/${product.id}`}
        className="product-image-wrap"
      >
        <motion.img
          src={product.image}
          alt={product.name}
          loading={index > 3 ? "lazy" : "eager"}
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />

        <span className="product-badge">
          {product.badge}
        </span>

        {/* Wishlist */}
        <motion.button
          className={`product-wishlist ${
            wishlisted ? "wishlisted" : ""
          }`}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();

            toggleWishlist(product);
          }}
          aria-label={
            wishlisted
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
        >
          {wishlisted ? "♥" : "♡"}
        </motion.button>

        <motion.div
          className="product-view"
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileHover={{
            opacity: 1,
            y: 0,
          }}
        >
          View product →
        </motion.div>
      </Link>

      <div className="product-details">

        <div className="product-meta">
          <span>{product.category}</span>

          <span className="product-rating">
            ★ {product.rating}
          </span>
        </div>

        <h3>{product.name}</h3>

        <div className="product-price">
  <strong>{formatPrice(product.price)}</strong>
  <del>{formatPrice(product.oldPrice)}</del>
</div>

      </div>
    </motion.article>
  );
}

export default ProductCard;