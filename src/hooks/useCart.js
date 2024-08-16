import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }

    const { state, addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = context;

    const cartItems = state.items;

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return {
        cartItems,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        clearCart,
    };
};