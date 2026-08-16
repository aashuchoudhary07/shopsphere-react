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
#
🚀 Getting Started

Follow these steps to run the project locally.

1. Clone the Repository
git clone https://github.com/aashuchoudhary07/shopsphere-react.git
2. Open the Project
cd shopsphere-react
3. Install Dependencies
npm install
4. Start the Development Server
npm run dev

The application will run at:

http://localhost:5173
🏗️ Production Build

To create an optimized production build:

npm run build

To preview the production build locally:

npm run preview

The production files are generated inside the:

dist/

directory.

🌐 Deployment

ShopSphere is deployed on Netlify.

Build Configuration
Build Command:
npm run build


Publish Directory:
dist
Live Website

🌐 https://shopsphere-byaashu.netlify.app

The project is connected to GitHub and deployed from the main branch.

🔀 Application Routes

ShopSphere uses React Router DOM for client-side routing.

Route	Page
/	Home
/products	Product Catalog
/products/:id	Product Details
/wishlist	Wishlist
/cart	Shopping Cart
/checkout	Checkout
/order-success	Order Success
/privacy	Privacy Policy
/terms	Terms & Conditions

A Netlify _redirects file is included to support direct access and page refreshes on client-side routes.

💰 Currency

ShopSphere uses Indian Rupees (₹) for product pricing.

Example:

₹7,499
₹21,999
₹4,999

Prices are formatted using the Indian numbering system.

🛒 Shopping Flow
Home
  ↓
Products
  ↓
Product Details
  ↓
Add to Cart
  ↓
Cart
  ↓
Checkout
  ↓
Place Order
  ↓
Order Success
⚡ Performance & Optimization

The application is optimized for production using Vite.

Optimization includes:

Production JavaScript and CSS minification
Optimized Vite build
Responsive image loading
CDN-based product images
Reusable React components
Client-side routing
Production-ready deployment configuration
📱 Responsive Design

ShopSphere is designed to work across:

💻 Desktop
💻 Laptop
📱 Tablet
📱 Mobile
🔐 Backend

ShopSphere is currently a frontend-focused e-commerce application.

The current version does not require a backend or database. Product data is managed through the frontend data layer, while cart and wishlist functionality are handled on the client side.

Future backend integration can include:
User authentication
Database
Product management
Order management
Payment gateway
Admin dashboard
User accounts
Persistent orders
🔮 Future Improvements

Planned improvements for future versions:

🔐 User authentication
🗄️ Backend API and database
💳 Real payment gateway
📦 Real-time inventory
👤 User profiles
⭐ Product reviews
🛠️ Admin dashboard
📋 Order history
🔔 Order notifications
☁️ Cloud-based product storage
👨‍💻 Author
Aashu Choudhary

B.Tech CSE Student

Interested in:

Web Development
Java
Python
C++
C
JavaScript
React
SQL
OpenCV
📄 License

This project is created for educational, portfolio, and demonstration purposes.

⭐ If you like ShopSphere, consider giving the repository a star!
