import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, category, sort]);

  return (
    <main className="products-page">

      {/* Header */}
      <section className="products-header">

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span className="section-eyebrow">
            THE COLLECTION
          </span>

          <h1>
            Objects worth
            <br />
            <span>bringing home.</span>
          </h1>

          <p>
            A carefully selected collection of everyday
            essentials, designed with intention.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          className="product-search"
          initial={{
            opacity: 0,
            x: 25,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />
        </motion.div>

      </section>

      {/* Controls */}
      <section className="product-controls">

        <div className="category-list">
          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? "category-button active"
                  : "category-button"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <select
          value={sort}
          onChange={(event) =>
            setSort(event.target.value)
          }
          className="sort-select"
        >
          <option value="featured">
            Featured
          </option>

          <option value="low">
            Price: Low to High
          </option>

          <option value="high">
            Price: High to Low
          </option>

          <option value="rating">
            Highest Rated
          </option>
        </select>

      </section>

      {/* Product grid */}
      <section
  id="featured-products"
  className="product-grid"
>

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))
        ) : (
          <motion.div
            className="no-products"
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
          >
            <span>⌕</span>
            <h2>No products found</h2>
            <p>
              Try another search or category.
            </p>
          </motion.div>
        )}

      </section>

    </main>
  );
}

export default Products;