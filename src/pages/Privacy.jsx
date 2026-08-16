import { motion } from "framer-motion";

function Privacy() {
  return (
    <main className="legal-page">
      <motion.div
        className="legal-container"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">
          SHOPSPHERE
        </span>

        <h1>Privacy Policy</h1>

        <p className="legal-intro">
          Your privacy matters to us. This Privacy Policy
          explains how ShopSphere handles information when
          you use our website.
        </p>

        <section>
          <h2>Information We Collect</h2>
          <p>
            ShopSphere may collect information that you
            voluntarily provide, such as your email address
            when subscribing to our newsletter or contacting us.
          </p>
        </section>

        <section>
          <h2>How We Use Information</h2>
          <p>
            Information may be used to respond to enquiries,
            improve our website, provide updates, and enhance
            your shopping experience.
          </p>
        </section>

        <section>
          <h2>Cookies & Local Storage</h2>
          <p>
            ShopSphere may use browser storage to remember
            preferences such as cart and wishlist items.
            This information remains stored in your browser.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            Our website may use third-party services for
            hosting, analytics, or other functionality.
            Their own privacy policies may apply.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy,
            please contact us through the Contact link on
            our website.
          </p>
        </section>

        <p className="legal-updated">
          Last updated: August 2026
        </p>
      </motion.div>
    </main>
  );
}

export default Privacy;