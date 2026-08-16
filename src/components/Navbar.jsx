import { motion } from "framer-motion";
import {NavLink, Link  } from "react-router-dom";
import { useState } from "react";
import SearchOverlay from "./SearchOverlay";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const navItems = [
  { name: "Home", path: "/", end: true },
  { name: "Shop", path: "/products" },
  { name: "About", path: "/about" },
];

function Navbar() {
  const { cartCount } = useCart();
  const {
  wishlistCount,
} = useWishlist();

  
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <motion.header
      className="navbar"
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >

      <SearchOverlay
  isOpen={searchOpen}
  onClose={() => setSearchOpen(false)}
/>
      <div className="nav-inner">

        {/* Logo */}

        <NavLink to="/" className="logo">
          <span className="logo-mark">
            S
          </span>

          <span className="logo-text">
            Shop<span>Sphere</span>
          </span>
        </NavLink>


        {/* Navigation */}

        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `nav-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.name}</span>

                  {isActive && (
                    <motion.span
                      className="nav-indicator"
                      layoutId="nav-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>


        {/* Actions */}

        <div className="nav-actions">

          {/* Search */}

          <motion.button
            className="nav-icon"
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.92,
            }}
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
          >
            ⌕
          </motion.button>


          {/* Wishlist */}

          <NavLink
            to="/wishlist"
            className="wishlist-nav-link"
          >
            <motion.button
              className="nav-icon wishlist-nav-button"
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
              aria-label="Wishlist"
            >
              <span>
                {wishlistCount > 0
                  ? "♥"
                  : "♡"}
              </span>

              {wishlistCount > 0 && (
                <span className="wishlist-count">
                  {wishlistCount}
                </span>
              )}
            </motion.button>
          </NavLink>


          {/* Cart */}

          <NavLink to="/cart">
            <motion.button
              className="cart-button"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              <span>Cart</span>

              <span>
                {cartCount}
              </span>
            </motion.button>
          </NavLink>

        </div>

      </div>
    </motion.header>
  );
}

export default Navbar;