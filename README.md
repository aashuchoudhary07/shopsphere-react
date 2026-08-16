# 🛍️ ShopSphere

### Modern React E-Commerce Web Application

ShopSphere is a modern and responsive e-commerce web application built with **React.js and Vite**. It provides a clean shopping experience with product browsing, search, filtering, wishlist, cart management, checkout flow, and smooth animations.

🔗 **Live Demo:** https://shopsphere-byaashu.netlify.app

---

## ✨ Features

### 🏠 Home Page
- Modern hero section
- Featured product showcase
- Smooth scroll-to-explore interaction
- Animated UI elements
- Responsive design

### 🛍️ Product Catalog
- Browse all products
- Product categories
- Product search
- Category filtering
- Sort by:
  - Featured
  - Price: Low to High
  - Price: High to Low
  - Highest Rated

### 📦 Product Details
- Product image
- Product information
- Category
- Rating
- Current price
- Original price
- Quantity selection
- Add to cart
- Wishlist functionality

### ❤️ Wishlist
- Add products to wishlist
- Remove products from wishlist
- Wishlist item count
- Add wishlist products directly to cart
- Wishlist data saved using localStorage

### 🛒 Shopping Cart
- Add products to cart
- Increase/decrease quantity
- Remove products
- Dynamic subtotal
- Shipping calculation
- Dynamic total
- Indian Rupee (₹) currency formatting

### 💳 Checkout
- Contact information
- Shipping address
- Payment method selection
- Order summary
- Order placement flow

### ✅ Order Success
- Dedicated order confirmation page
- Successful order flow after checkout

### 🎨 UI & Animations
- Modern minimal design
- Responsive layout
- Framer Motion animations
- Hover effects
- Smooth transitions
- Interactive buttons and cards

### 📄 Additional Pages
- Privacy Policy
- Terms & Conditions
- Contact functionality
- 404 / Not Found page

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **JavaScript**
- **HTML5**
- **CSS3**

### Libraries
- **React Router DOM**
- **Framer Motion**

### Tools & Platforms
- **Vite**
- **Git**
- **GitHub**
- **Netlify**

---

## 📂 Project Structure

```text
shopsphere-react/
│
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── _redirects
│
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── SearchOverlay.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── SuccessModal.jsx
│   │
│   ├── context/
│   │   ├── CartContext.jsx
│   │   └── WishlistContext.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Wishlist.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── OrderSuccess.jsx
│   │   ├── Privacy.jsx
│   │   ├── Terms.jsx
│   │   └── NotFound.jsx
│   │
│   ├── utils/
│   │   └── formatPrice.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
