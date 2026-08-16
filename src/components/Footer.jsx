import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

function Footer() {

    const [subscribed, setSubscribed] = useState(false);
  return (
    <footer className="site-footer">

      <div className="footer-main">

        {/* Brand */}
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link to="/" className="footer-logo">
            <span className="footer-logo-mark">
              S
            </span>

            <span>
              Shop<span>Sphere</span>
            </span>
          </Link>

          <p>
            Thoughtfully selected products for
            everyday living.
          </p>
        </motion.div>


        {/* Explore */}
        <div className="footer-column">

          <span className="footer-heading">
            Explore
          </span>

          <Link to="/">
            Home
          </Link>

          <Link to="/products">
            Shop
          </Link>

          <Link to="/wishlist">
            Wishlist
          </Link>

          <Link to="/cart">
            Cart
          </Link>

        </div>


        {/* Company */}
        <div className="footer-column">

          <span className="footer-heading">
            Company
          </span>

          <Link to="/about">
            About
          </Link>

          <a href="#featured-products">
            Featured
          </a>

          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=aashug041@gmail.com&su=ShopSphere%20Enquiry"
  target="_blank"
  rel="noopener noreferrer"
  className="footer-contact"
>
  Contact
</a>


        </div>


        {/* Newsletter */}
        <div className="footer-newsletter">

          <span className="footer-heading">
            Stay in the loop
          </span>

          <p>
            Get occasional updates about new
            collections and curated finds.
          </p>

          <form
  className="footer-form"
  onSubmit={(event) => {
    event.preventDefault();
    setSubscribed(true);
  }}
>
  <input
    type="email"
    placeholder="Your email address"
    required
  />

  <button type="submit" aria-label="Subscribe">
    →
  </button>
</form>
{subscribed && (
  <motion.div
    className="newsletter-success"
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
  >
    ✓ You're on the list.
  </motion.div>
)}

        </div>

      </div>

      <div className="footer-bottom">

  <span>
    © {new Date().getFullYear()} ShopSphere
  </span>

  <div className="footer-legal-links">
    <Link to="/privacy">
      Privacy Policy
    </Link>

    <Link to="/terms">
      Terms & Conditions
    </Link>
  </div>

  <span>
    Crafted with intention.
  </span>

</div>

    </footer>
  );
}

export default Footer;