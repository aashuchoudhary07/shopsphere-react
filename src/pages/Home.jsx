import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const heroItem = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Home() {

  // Scroll to Featured Products
  const scrollToProducts = () => {
    const productsSection =
      document.getElementById("featured-products");

    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="home">

      {/* Background Orbs */}

      <motion.div
        className="hero-orb hero-orb-one"
        animate={{
          y: [0, -25, 0],
          x: [0, 12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="hero-orb hero-orb-two"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          {/* Hero Text */}

          <motion.div
            className="hero-copy"
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >

            <motion.div
              className="hero-eyebrow"
              variants={heroItem}
            >
              <span className="eyebrow-dot" />
              Curated for everyday living
            </motion.div>

            <motion.h1 variants={heroItem}>
              Discover things
              <br />
              <span>worth keeping.</span>
            </motion.h1>

            <motion.p variants={heroItem}>
              Thoughtfully selected products designed to make
              everyday moments feel a little better.
            </motion.p>

            {/* Hero Buttons */}

            <motion.div
              className="hero-actions"
              variants={heroItem}
            >

              <motion.div
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Link
                  to="/products"
                  className="hero-primary"
                >
                  Explore collection
                  <span>↗</span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  x: 5,
                }}
              >
                <Link
                  to="/products"
                  className="hero-secondary"
                >
                  View all products
                  <span>→</span>
                </Link>
              </motion.div>

            </motion.div>

          </motion.div>

          {/* Hero Visual */}

          <motion.div
            className="hero-visual"
            initial={{
              opacity: 0,
              scale: 0.88,
              x: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <motion.div
              className="hero-product"
              animate={{
                y: [0, -12, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <div className="product-glow" />

              <div className="product-card-inner">

                <div className="product-label">
                  FEATURED
                </div>

                <div className="product-shape">
  <img
    src={products[0].image}
    alt={products[0].name}
    className="hero-featured-image"
  />
</div>

                <div className="product-info">

  <div>
    <span>{products[0].name}</span>
    <small>{products[0].category}</small>
  </div>

  <strong>
    {products[0].price}
  </strong>

</div>

              </div>

            </motion.div>

            {/* Floating Tags */}

            <motion.div
              className="floating-tag tag-one"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              New arrivals
            </motion.div>

            <motion.div
              className="floating-tag tag-two"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              100% curated
            </motion.div>

          </motion.div>

        </div>

        {/* Scroll To Explore */}

        <motion.button
          className="hero-scroll"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.4,
            duration: 0.6,
          }}
          onClick={scrollToProducts}
          type="button"
          aria-label="Scroll to featured products"
        >

          <span>
            Scroll to explore
          </span>

          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.div>

        </motion.button>

      </section>

      {/* FEATURED PRODUCTS */}

      <section
        id="featured-products"
        className="home-featured-products"
      >

        <div className="home-featured-header">

          <div>

            <span className="section-eyebrow">
              CURATED SELECTION
            </span>

            <h2>
              Featured
              <br />
              <span>pieces.</span>
            </h2>

          </div>

          <Link
            to="/products"
            className="home-view-all"
          >
            View all products
            <span>→</span>
          </Link>

        </div>

        <div className="home-featured-grid">

          {products.slice(0, 4).map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}

        </div>

      </section>

    </main>
  );
}

export default Home;