import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import products from "../data/products";

function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const filteredProducts = products.filter((product) => {
    const searchText = query.toLowerCase().trim();

    if (!searchText) return false;

    return (
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText)
    );
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="search-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="search-panel"
            initial={{ y: -35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -25, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Header */}

            <div className="search-header">
              <div>
                <span className="search-eyebrow">
                  FIND SOMETHING YOU LOVE
                </span>

                <h2>Search ShopSphere</h2>
              </div>

              <button
                className="search-close"
                onClick={onClose}
                aria-label="Close search"
              >
                ×
              </button>
            </div>

            {/* Search Input */}

            <div className="search-input-wrap">
              <span className="search-symbol">⌕</span>

              <input
                autoFocus
                type="text"
                value={query}
                onChange={(event) =>
                  setQuery(event.target.value)
                }
                placeholder="Search products or categories..."
              />

              {query && (
                <button
                  className="search-clear"
                  onClick={() => setQuery("")}
                >
                  ×
                </button>
              )}
            </div>

            {/* Results */}

            <div className="search-results">
              {!query ? (
                <div className="search-empty">
                  <span>⌕</span>
                  <p>
                    Start typing to discover products.
                  </p>
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="search-empty">
                  <strong>No products found</strong>
                  <p>
                    Try searching for something else.
                  </p>
                </div>
              ) : (
                <>
                  <div className="search-result-count">
                    {filteredProducts.length}{" "}
                    {filteredProducts.length === 1
                      ? "result"
                      : "results"}
                  </div>

                  <div className="search-product-list">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        className="search-product"
                        onClick={onClose}
                      >
                        <div className="search-product-image">
                          <img
                            src={product.image}
                            alt={product.name}
                          />
                        </div>

                        <div className="search-product-info">
                          <span>
                            {product.category}
                          </span>

                          <h3>{product.name}</h3>

                          <strong>
                            ${product.price}
                          </strong>
                        </div>

                        <span className="search-arrow">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Footer */}

            <div className="search-footer">
              <span>
                Press <b>ESC</b> to close
              </span>

              <span>
                {filteredProducts.length > 0
                  ? "Select a product to view details"
                  : "Search by product name or category"}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SearchOverlay;