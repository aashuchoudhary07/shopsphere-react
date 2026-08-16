import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("shopsphere-wishlist");

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "shopsphere-wishlist",
      JSON.stringify(wishlistItems)
    );
  }, [wishlistItems]);

  const toggleWishlist = (product) => {
    setWishlistItems((currentItems) => {
      const exists = currentItems.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return currentItems.filter(
          (item) => item.id !== product.id
        );
      }

      return [...currentItems, product];
    });
  };

  const isWishlisted = (productId) => {
    return wishlistItems.some(
      (item) => item.id === productId
    );
  };

  const wishlistCount = wishlistItems.length;

  const value = {
    wishlistItems,
    wishlistCount,
    toggleWishlist,
    isWishlisted,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}