import { motion } from "framer-motion";

function Terms() {
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

        <h1>Terms & Conditions</h1>

        <p className="legal-intro">
          By using ShopSphere, you agree to use the website
          responsibly and in accordance with these terms.
        </p>

        <section>
          <h2>Use of the Website</h2>
          <p>
            You agree to use ShopSphere only for lawful
            purposes and not to misuse or interfere with
            the website.
          </p>
        </section>

        <section>
          <h2>Products & Pricing</h2>
          <p>
            Product information and prices displayed on the
            website may change without prior notice.
            We aim to keep all information accurate.
          </p>
        </section>

        <section>
          <h2>Orders</h2>
          <p>
            Adding a product to your cart does not guarantee
            availability. Orders may be subject to availability
            and confirmation.
          </p>
        </section>

        <section>
          <h2>Intellectual Property</h2>
          <p>
            The ShopSphere name, design, content, graphics,
            and other website elements should not be copied
            or reproduced without permission.
          </p>
        </section>

        <section>
          <h2>Changes to These Terms</h2>
          <p>
            We may update these terms when necessary.
            Continued use of the website after changes means
            you accept the updated terms.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For questions regarding these terms, please
            contact ShopSphere through our Contact option.
          </p>
        </section>

        <p className="legal-updated">
          Last updated: August 2026
        </p>
      </motion.div>
    </main>
  );
}

export default Terms;